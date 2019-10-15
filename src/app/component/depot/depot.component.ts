import { Component, OnInit } from '@angular/core';
import { EmplacementService } from 'src/app/service/emplacement/emplacement.service';
import {ExcelService} from 'src/app/service/excel/excel.service';
import { FraisService } from 'src/app/service/frais/frais.service';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Router, Params } from '@angular/router';
import { AbonementService } from 'src/app/service/abonement/abonement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
 selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {
  commissionFintek: any;
  listabonement: any;
  ListTarif = [];
  listmois : any ;
  tab  : any;
  tab2: any;

  affiche1: any;
  test1: any;
  test2: any;
  test: any;
  valider: FormGroup;
  isEdit : boolean ;
  isEdit2: boolean;

  valider1: FormGroup;
  valider2: FormGroup;
  isEdit1: boolean;
  constructor(private excelService : ExcelService,private fraisService : FraisService,
    private emplacementService: EmplacementService,
    private abonementService : AbonementService,
    private firebase: AngularFireDatabase,
    public router: Router,
  ) {
    this.valider =new FormGroup({
      editTarif1: new FormControl('', Validators.required),
    });
    this.valider1 =new FormGroup({
      editTarif2: new FormControl('', Validators.required),
    });
    this.valider2 =new FormGroup({
      editTarif3: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.ini();
    this.afficheAbonement();
    this.afficheTarif() ;

    // this.tab2[0][0] = '1';
    // this.tab2[0][1] = '2';
    // this.tab2[0][2] = '3';
    // this.tab2[0][3] = '6';
    // this.tab2[0][4] = '12';
    // this.tab2[0][5] = '24';


  //   var tab=new Array(0);
  //   tab[0]=new Array(20);
  //   for(let index = 0; index < this.ListTarif.length  ; index++){
  //     tab[0][index] = this.ListTarif[index].prix.split(" ");;
  //       }
  //       console.log(tab[0][0])
   }

  ini(){
    this.getCommissionFintekList();
  }

  afficheAbonement(){

    this.abonementService.getListAbonement().subscribe(
      list => {
        this.listabonement = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        });
      });
  }
  EditRecord() {
    this.isEdit = true ;
  }
  EditRecord1() {
    this.isEdit1= true ;
  }
  EditRecord2() {
    this.isEdit2 = true ;
  }
  afficheTarif(){
    this.abonementService.getTarif2().then((test)=>{
      this.test = test[1].prix ;
      this.test1 = test[2].prix ;
      this.test2 = test[3].prix ;
      this.isEdit = false ;
      this.isEdit1 = false ;
      this.isEdit2 = false ;
    }) ;
    }
   getCommissionFintekList() {
    // Use snapshotChanges().map() to store the key
    this.fraisService.getCommissionFintek().snapshotChanges().subscribe(
      list => {
        this.commissionFintek = list.map(item => {
    		return {
	            $key: item.key,
              ...item.payload.val(),
	        }

        });
      }
    );
  }

  newsConf(){
    this.router.navigate(['add-gest']);
  }

  open(comsFintek){
    this.router.navigate(['add-gest', comsFintek]);
  }

  UpdateTarif1(){
    var montant_saisie  = this.valider.get("editTarif1").value;
    console.log(montant_saisie);
    this.abonementService.updateTarif1(montant_saisie);
    this.isEdit = false;
    this.afficheTarif() ;


  }
  UpdateTarif2(){
    var montant_saisie  = this.valider1.get("editTarif2").value;
    console.log(montant_saisie);
    this.abonementService.updateTarif2(montant_saisie);
    this.isEdit1 = false;
    this.afficheTarif() ;
  }
  UpdateTarif3(){
    var montant_saisie  = this.valider2.get("editTarif3").value;
    console.log(montant_saisie);
    this.abonementService.updateTarif3(montant_saisie);
    this.isEdit2= false;
    this.afficheTarif() ;
  }
  // encore à tester  (  documentation   offciel  de firebase)
  updatenew(){
    var montant_saisie  = this.valider.get("editTarif1").value;
    console.log(montant_saisie);
    this.abonementService.writeNewPost1(montant_saisie);
  }
}
