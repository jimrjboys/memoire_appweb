import { Component, OnInit } from '@angular/core';
import { EmplacementService } from 'src/app/service/emplacement/emplacement.service';
//import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-jirama',
  templateUrl: './jirama.component.html',
  styleUrls: ['./jirama.component.scss']
})

export class JiramaComponent implements OnInit {
  historiquesArraylist:any;
  historiquesArraylistko: any;
  thebest : any ;
  valider: FormGroup;
  final: any;

  constructor( private emplacementService: EmplacementService,private datePipe: DatePipe  ) {
     this.valider =new FormGroup({
      date_saisie: new FormControl('', Validators.required),
    });
   }
  ngOnInit() {
    this.myinit();
  }
  myinit(){
    this.emplacementService.getHistoriques().subscribe(
      list => {
        this.historiquesArraylist = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()

          }
        });

        var date_now= "";
        var date_to_parse = new Date();
        var year = date_to_parse.getFullYear().toString();
        var month = (date_to_parse.getMonth() + 1).toString();
        var day = date_to_parse.getDate().toString();
        var months = (month.length <2)? '0'+month : month;
        var days = (day.length <2)? '0'+day : day;
        var date_now = days+'/'+months+'/'+year

    });
    this.emplacementService.getHistoriquesko().subscribe(
      list => {
        this.historiquesArraylistko = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()

          }
        });
        // var date_now= "";
        // var date_to_parse = new Date();
        // var year = date_to_parse.getFullYear().toString();
        // var month = (date_to_parse.getMonth() + 1).toString();
        // var day = date_to_parse.getDate().toString();
        // var months = (month.length <2)? '0'+month : month;
        // var days = (day.length <2)? '0'+day : day;
        // var date_now = days+'/'+months+'/'+year
    });

  }
  toPdf(){
    var date_now= "";
    var date_to_parse = new Date();
    var year = date_to_parse.getFullYear().toString();
    var month = (date_to_parse.getMonth() + 1).toString();
    var day = date_to_parse.getDate().toString();
    var months = (month.length <2)? '0'+month : month;
    var days = (day.length <2)? '0'+day : day;
    var date_now = days+'/'+months+'/'+year

    var data = document.getElementById('target_web');
    html2canvas(data).then(canvas => {
    // tsy azo kitihana
    var imgWidth = 208;
    var pageHeight = 235;
                   //Width = 0 x   205       /0
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4');
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('exportation '+date_now+'.pdf');
    });
  }
  VerifierTransaction(date_saisie :any)
  {
    var date_saisie  = this.valider.get("date_saisie").value;
    console.log(date_saisie);
    //var datetest = date_saisie.toString().replace('-','/');
    //console.log(datetest);
    var date_final = this.datePipe.transform(date_saisie,"dd/MM/yyyy");
    // this.thebest = this.historiquesArraylist.filter(function (v) {
    //   var splitted = v.facture.dateHour.split(" ");

    //   return ((splitted[0] == date_final)&&(v.facture.recipient == "JIRAMA"));
    // });
    this.thebest =  this.historiquesArraylist.concat( this.historiquesArraylistko );
    this.final = this.thebest.filter(function (v) {
      var splitted = v.facture.dateHour.split(" ");
      return ((splitted[0] == date_final)&&(v.facture.recipient == "JIRAMA"));
    });

  }
}
