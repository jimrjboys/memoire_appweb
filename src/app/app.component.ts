import { Component, OnInit } from '@angular/core';
import { EmplacementService } from 'src/app/service/emplacement/emplacement.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginService } from './service/login/login.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./animate.min.css'
],
providers: [DatePipe]
})
export class AppComponent {
  historiquesArray = [];
  title = 'back office';
  array:any;
  date:any;
  fondArray4=[];
  fondArray3=[];
  fondA:any;
  tmp:any;
  indiv:any;
  logError = false;
  idAgent: any;
  nombre: any;
  submitted = false;
  users:any;
  showErrorMessage: boolean;
  connecte: boolean = false;
  connectee: boolean = false;
  historiquesArraylist:any;
  start:any;
  mois:any;
  formControls = this.loginService.form.controls
  
  constructor(  private router: Router,private datePipe: DatePipe, 
    private loginService: LoginService,
    private ngxService: NgxUiLoaderService) { }
  ngOnInit() {
  }
login() {
  this.ngxService.start();
  this.submitted = true;
  if (this.loginService.form.valid) {
    this.loginService.userAuth()
      .subscribe(
        (data: any) => {
          this.loginService.getAgent().subscribe(
            (datauser: any) => {
                      for (let index = 0; index < datauser.length; index++) {
                        if (datauser[index].id ==data.user.id){
                            this.indiv=datauser[index];
                              if(this.indiv.customValues.profil=='niveau3'){
                                this.loginService.getAgent()
                                .subscribe(
                                  (session: any) => {
                                    var user = session.filter(function (v) {
                                      return (v.id == data.user.id);});
                                      this.users = user;                                    
                                      localStorage.setItem('societe', this.users[0].customValues.agent);
                                      localStorage.setItem('niveau', this.users[0].customValues.profil);
                                     this.connecte = true;
                                    this.router.navigate(['/accueil']);
                                    this.connectee=false;
                                     this.ngxService.stop();
                                  },
                                  err => console.log("erreur de :" + err)
                                );
                              }
                              else {
                                this.connectee=true;
                                this.ngxService.stop()
                                this.showErrorMessage = true;
                                setTimeout(() => this.showErrorMessage = false, 3000);
                              }
                        }                                      
                      }
                  }, err1 => {})
        }, err => {
          if (err.status == 401) {
            this.ngxService.stop()
            this.showErrorMessage = true;
            setTimeout(() => this.showErrorMessage = false, 3000);
          }
        }
      )
  }
}
logout() {
  localStorage.removeItem('societe');
  localStorage.removeItem('niveau');
  this.loginService.form.reset();
  this.connecte = false;
}
}