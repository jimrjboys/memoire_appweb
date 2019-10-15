import { Component, OnInit } from '@angular/core';
import { EmplacementService } from 'src/app/service/emplacement/emplacement.service';
import {ExcelService} from 'src/app/service/excel/excel.service';
import { FraisService } from 'src/app/service/frais/frais.service';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  constructor(private excelService : ExcelService,private fraisService : FraisService,private emplacementService: EmplacementService) { }
  historiquesArraylist = [];
  historiquesArray2= [];
  tab3:any;
  compte: any=0;
  historiquesArray1 = [];
  dateDebut: any = "";
  soc:any;
  com:any;
  comfin:any;
  comsip:any;
  test:boolean=false;
  dateFin: any ="";

  ngOnInit() {
    this.ini();
    this.soc="TOUS";
  }
  ini(){
    this.fraisService.getCommission().subscribe(
      list => {
        this.com = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val(),
          }
        });
        this.change('','','TOUS');
      }
    );
  }
  change(us,us1,us3){
    this.compte=0;
    for(let index = 0; index < this.com.length  ; index++){
      if(this.com[index].$key=="FINTEK"){
              this.comfin=this.com[index].frais;
        }
        if(this.com[index].$key=="SIPEM"){
          this.comsip=this.com[index].frais;
        }
      }
    var datedebut = us.split("-");
    var datefin = us1.split("-");
    this.emplacementService.getHistoriques().subscribe(
      list => {
        this.historiquesArraylist = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val(),
          }
        });
        var tab2=new Array(0);
    tab2[0]=new Array(14);
    tab2[0][0] = 'Situation';
    tab2[0][1] = 'Journal';
    tab2[0][2] = 'dateHour';
    tab2[0][3] = 'numero de piece';
    tab2[0][4] = 'compte debit';
    tab2[0][5] = 'compte credit';
    tab2[0][6] = 'reference facture';
    tab2[0][7] = 'Ref client';
    tab2[0][8] = 'Id agent ou id client';  
    tab2[0][9] = 'Tiers';
    tab2[0][10] = 'Libelles';
    tab2[0][11] = 'Montant debit';
    tab2[0][12] = 'Montant credit';      
    tab2[0][13] = 'Periode';
    var i=1;
    //Boucle transaction par date et affectation 
        for (let index = 0; index < this.historiquesArraylist.length  ; index++) {
          if((this.historiquesArraylist[index].facture.recipient==us3)||(us3=="TOUS")){
          var res = this.historiquesArraylist[index].facture.dateHour.split(" ");
          var datetransaction = res[0].split("/");
 //test si date debut >date fin
 if(datedebut[0]>datefin[0]) {
     if(datedebut[1]>datefin[1]) {
            if(datedebut[2]>datefin[2]){
              this.test=true;
            }
            else{
                    //us1 vide us vide
        if(us1== "" && us==""){
         this.test=true;
      }
    //us non vide us1 vide
      if(us!= "" && us1==""){
            if(datedebut[0]<=datetransaction[2]){
                  if(datedebut[0]==datetransaction[2]){
                        if(datedebut[1]<=datetransaction[1]){
                              if(datedebut[1]==datetransaction[1]){
                                        if(datedebut[2]<=datetransaction[0]){
                                            this.test=true;
                                        }
                              }
                              else{
                                this.test=true;
                              }
                        }
                     
                  }
                  else{
                    this.test=true;
                  }
              }  
      }     
    //us1 non vide us vide
      if(us1!= "" && us==""){
        if(datefin[0]>=datetransaction[2]){
              if(datefin[0]==datetransaction[2]){
                    if(datefin[1]>=datetransaction[1]){
                          if(datefin[1]==datetransaction[1]){
                                    if(datefin[2]>=datetransaction[0]){
                                      this.test=true;
                                    }
                          }
                          else{
                            this.test=true;
                          }
                    }
              }
              else{
                this.test=true;
              }
          }
      }   
      //us non vide us1 non vide
      if(us1!= "" && us!=""){
        if(datedebut[0]<=datetransaction[2]){
          if(datedebut[0]==datetransaction[2]){
                if(datedebut[1]<=datetransaction[1]){
                      if(datedebut[1]==datetransaction[1]){
                                if(datedebut[2]<=datetransaction[0]){
                                  if(datefin[0]>=datetransaction[2]){
                                    if(datefin[0]==datetransaction[2]){
                                          if(datefin[1]>=datetransaction[1]){
                                                if(datefin[1]==datetransaction[1]){
                                                          if(datefin[2]>=datetransaction[0]){
                                                            this.test=true;
                                                          }
                                                }
                                                else{
                                                  if(datefin[0]>=datetransaction[2]){
                                                    if(datefin[0]==datetransaction[2]){
                                                          if(datefin[1]>=datetransaction[1]){
                                                                if(datefin[1]==datetransaction[1]){
                                                                          if(datefin[2]>=datetransaction[0]){
                                                                            this.test=true;
                                                                          }
                                                                }
                                                                else{
                                                                  this.test=true;
                                                                }
                                                          }
                                                    }
                                                    else{
                                                      this.test=true;
                                                    }
                                                }
                                                }
                                          }
                                    }
                                    else{
                                      if(datefin[0]>=datetransaction[2]){
                                        if(datefin[0]==datetransaction[2]){
                                              if(datefin[1]>=datetransaction[1]){
                                                    if(datefin[1]==datetransaction[1]){
                                                              if(datefin[2]>=datetransaction[0]){
                                                                this.test=true;  
                                                              }
                                                    }
                                                    else{
                                                      this.test=true;
                                                    }
                                              }
                                        }
                                        else{
                                          this.test=true;
                                        }
                                    } 
                                    }
                                } 
                                }
                      }
                      else{
                        if(datefin[0]>=datetransaction[2]){
                          if(datefin[0]==datetransaction[2]){
                                if(datefin[1]>=datetransaction[1]){
                                      if(datefin[1]==datetransaction[1]){
                                                if(datefin[2]>=datetransaction[0]){
                                                  this.test=true;
                                                }
                                      }
                                      else{
                                        this.test=true;
                                      }
                                }
                          }
                          else{
                            this.test=true;
                          }
                      } 
                      }
                }
          }
          else{
            this.test=true;
          }
      }  
      } 
            }
     }
     else{
           //us1 vide us vide
        if(us1== "" && us==""){
          this.test=true;
      }
    //us non vide us1 vide
      if(us!= "" && us1==""){
            if(datedebut[0]<=datetransaction[2]){
                  if(datedebut[0]==datetransaction[2]){
                        if(datedebut[1]<=datetransaction[1]){
                              if(datedebut[1]==datetransaction[1]){
                                        if(datedebut[2]<=datetransaction[0]){
                                          this.test=true;
                                        }
                              }
                              else{
                                this.test=true;
                              }
                        }
                  }
                  else{
                    this.test=true;
                  }
              }    
      }     
    //us1 non vide us vide
      if(us1!= "" && us==""){
        if(datefin[0]>=datetransaction[2]){
              if(datefin[0]==datetransaction[2]){
                    if(datefin[1]>=datetransaction[1]){
                          if(datefin[1]==datetransaction[1]){
                                    if(datefin[2]>=datetransaction[0]){
                                      this.test=true;
                                    }
                          }
                          else{
                            this.test=true;
                          }
                    }
              }
              else{
                this.test=true;
              }
          }    
      }   
      //us non vide us1 non vide
      if(us1!= "" && us!=""){
        if(datedebut[0]<=datetransaction[2]){
          if(datedebut[0]==datetransaction[2]){
                if(datedebut[1]<=datetransaction[1]){
                      if(datedebut[1]==datetransaction[1]){
                                if(datedebut[2]<=datetransaction[0]){
                                  if(datefin[0]>=datetransaction[2]){
                                    if(datefin[0]==datetransaction[2]){
                                          if(datefin[1]>=datetransaction[1]){
                                                if(datefin[1]==datetransaction[1]){
                                                          if(datefin[2]>=datetransaction[0]){
                                                            this.test=true;
                                                          }
                                                }
                                                else{
                                                  if(datefin[0]>=datetransaction[2]){
                                                    if(datefin[0]==datetransaction[2]){
                                                          if(datefin[1]>=datetransaction[1]){
                                                                if(datefin[1]==datetransaction[1]){
                                                                          if(datefin[2]>=datetransaction[0]){
                                                                            this.test=true;
                                                                          }
                                                                }
                                                                else{
                                                                  this.test=true;
                                                                }
                                                          }
                                                    }
                                                    else{
                                                      this.test=true;
                                                    }
                                                } 
                                                }
                                          }
                                    }
                                    else{
                                      if(datefin[0]>=datetransaction[2]){
                                        if(datefin[0]==datetransaction[2]){
                                              if(datefin[1]>=datetransaction[1]){
                                                    if(datefin[1]==datetransaction[1]){
                                                              if(datefin[2]>=datetransaction[0]){
                                                                this.test=true;
                                                              }
                                                    }
                                                    else{
                                                      this.test=true;
                                                    }
                                              }
                                        }
                                        else{
                                          this.test=true;
                                        }
                                    }
                                    }
                                } 
                                }
                      }
                      else{
                        if(datefin[0]>=datetransaction[2]){
                          if(datefin[0]==datetransaction[2]){
                                if(datefin[1]>=datetransaction[1]){
                                      if(datefin[1]==datetransaction[1]){
                                                if(datefin[2]>=datetransaction[0]){
                                                  this.test=true;
                                                }
                                      }
                                      else{
                                        this.test=true;
                                      }
                                }
                          }
                          else{
                            this.test=true;
                          }
                      } 
                      }
                }
          }
          else{
            this.test=true;
          }
      } 
      } 
     }
  }  
  else{
      //us1 vide us vide
        if((us1== "" && us=="") ||(us== undefined && us1== undefined)){
          this.test=true;
        }
      //us non vide us1 vide
        if(us!= "" && us1==""){
              if(datedebut[0]<=datetransaction[2]){
                    if(datedebut[0]==datetransaction[2]){
                          if(datedebut[1]<=datetransaction[1]){
                                if(datedebut[1]==datetransaction[1]){
                                          if(datedebut[2]<=datetransaction[0]){
                                            this.test=true;
                                          }
                                }
                                else{
                                  this.test=true;
                                }
                          }
                    }
                    else{
                      this.test=true;
                    }
                }  
        }     
      //us1 non vide us vide
        if(us1!= "" && us==""){
          if(datefin[0]>=datetransaction[2]){
                if(datefin[0]==datetransaction[2]){
                      if(datefin[1]>=datetransaction[1]){
                            if(datefin[1]==datetransaction[1]){
                                      if(datefin[2]>=datetransaction[0]){
                                        this.test=true;
                                      }
                            }
                            else{
                              this.test=true;
                            }
                      }
                }
                else{
                  this.test=true;
                }
            } 
        }   
        //us non vide us1 non vide
        if(us1!= "" && us!=""){
          if(datedebut[0]<=datetransaction[2]){
            if(datedebut[0]==datetransaction[2]){
                  if(datedebut[1]<=datetransaction[1]){
                        if(datedebut[1]==datetransaction[1]){
                                  if(datedebut[2]<=datetransaction[0]){
                                    if(datefin[0]>=datetransaction[2]){
                                      if(datefin[0]==datetransaction[2]){
                                            if(datefin[1]>=datetransaction[1]){
                                                  if(datefin[1]==datetransaction[1]){
                                                            if(datefin[2]>=datetransaction[0]){
                                                              this.test=true;
                                                            }
                                                  }
                                                  else{
                                                    if(datefin[0]>=datetransaction[2]){
                                                      if(datefin[0]==datetransaction[2]){
                                                            if(datefin[1]>=datetransaction[1]){
                                                                  if(datefin[1]==datetransaction[1]){
                                                                            if(datefin[2]>=datetransaction[0]){
                                                                              this.test=true;
                                                                            }
                                                                                                                                              }
                                                                  else{
                                                                    this.test=true;
                                                                  }
                                                            }
                                                      }
                                                      else{
                                                        this.test=true;
                                                      }
                                                  }
                                                
                                                  }
                                            }
                                            
                                      }
                                      else{
                                        if(datefin[0]>=datetransaction[2]){
                                          if(datefin[0]==datetransaction[2]){
                                                if(datefin[1]>=datetransaction[1]){
                                                      if(datefin[1]==datetransaction[1]){
                                                                if(datefin[2]>=datetransaction[0]){
                                                                  this.test=true;
                                                               }
                                                      }
                                                      else{
                                                        this.test=true;
                                                      }
                                                }
                                                                                        }
                                          else{
                                            this.test=true;
                                          }
                                      }
                                     
                                      }
                                  }
                                 
                                  }
                                
                        }
                        else{
                          if(datefin[0]>=datetransaction[2]){
                            if(datefin[0]==datetransaction[2]){
                                  if(datefin[1]>=datetransaction[1]){
                                        if(datefin[1]==datetransaction[1]){
                                                  if(datefin[2]>=datetransaction[0]){
                                                    this.test=true;
                                                  }
                                                  
                                        }
                                        else{
                                          this.test=true;
                                        }
                                  }                   
                            }
                            else{
                              this.test=true;
                            }
                        }               
                        }
                  }         
            }
            else{
              this.test=true;
            }
        }       
        } 
      }  
      }
      if(this.test==true){
        tab2[i]=new Array(14);
        if((this.historiquesArraylist[index].facture.expeditaire!='agentexterne')&&(this.historiquesArraylist[index].facture.expeditaire!='')){
          this.compte++;
        if(this.historiquesArraylist[index].facture.expeditaire=='agentsipem'){
          tab2[i][0] = "Virement de la commission venant de l'Agent Sipem à Sipem";
          tab2[i][4] = "512200";
          tab2[i][5] = "";
        }
        if(this.historiquesArraylist[index].facture.expeditaire=='particulier'){
          tab2[i][0] = "Virement de la commission venant du client à Sipem";
          tab2[i][4] = "512200";
          tab2[i][5] = "";
        }
        tab2[i][1]="Ca";
        tab2[i][2] = datetransaction;
        tab2[i][3] = this.historiquesArraylist[index].$key;
        tab2[i][6] = this.historiquesArraylist[index].facture.invoiceRef;
        tab2[i][7] = this.historiquesArraylist[index].facture.clientRef;
        tab2[i][8] = this.historiquesArraylist[index].idAgent;
        tab2[i][9] = "";
        tab2[i][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission sipem ' + res;
        tab2[i][11] = this.comsip;
        tab2[i][12] = 0;
        tab2[i][13]=res;
        
        tab2[i+1]=new Array(14);
        if(this.historiquesArraylist[index].facture.expeditaire=='agentsipem'){
            tab2[i+1][0] = "Virement de la commission venant de l'Agent Sipem à Sipem";
            tab2[i+1][4] = "";
            tab2[i+1][5] = "411001";
        }
        if(this.historiquesArraylist[index].facture.expeditaire=='particulier'){
            tab2[i+1][0] = "Virement de la commission venant du client à Sipem";
            tab2[i+1][4] = "";
            tab2[i+1][5] = "411002";
          }
        tab2[i+1][1]="Ca";
        tab2[i+1][2] = datetransaction;
        tab2[i+1][3] = this.historiquesArraylist[index].$key;
        tab2[i+1][6] = this.historiquesArraylist[index].facture.invoiceRef;
        tab2[i+1][7] = this.historiquesArraylist[index].facture.clientRef;         
        tab2[i+1][8] = this.historiquesArraylist[index].idAgent;
        tab2[i+1][9] = this.historiquesArraylist[index].facture.expeditaire;
        tab2[i+1][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission sipem ' + res;
        tab2[i+1][11] =0;
        tab2[i+1][12] = this.comsip;
        tab2[i+1][13]=res;
        tab2[i+2]=new Array(14);
        if(this.historiquesArraylist[index].facture.expeditaire=='agentsipem'){
            tab2[i+2][0] = "Virement de la commission venant de l'Agent Sipem à Sipem";
        }
        if(this.historiquesArraylist[index].facture.expeditaire=='particulier'){
            tab2[i+2][0] = "Virement de la commission venant du client à Sipem";
          }
        tab2[i+2][4] = "";
        tab2[i+2][5] = "708200";
        tab2[i+2][1]="vte";
        tab2[i+2][2] = datetransaction;
        tab2[i+2][3] = this.historiquesArraylist[index].$key;
        tab2[i+2][6] = this.historiquesArraylist[index].facture.invoiceRef;
        tab2[i+2][7] = this.historiquesArraylist[index].facture.clientRef;         
        tab2[i+2][8] = this.historiquesArraylist[index].idAgent;
        tab2[i+2][9] = "";
        tab2[i+2][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission sipem ' + res;
        tab2[i+2][11] =0;
      tab2[i+2][12] = (this.comsip*100)/120;
        tab2[i+2][13]=res;
        tab2[i+3]=new Array(14);
        if(this.historiquesArraylist[index].facture.expeditaire=='agentsipem'){
            tab2[i+3][0] = "Virement de la commission venant de l'Agent Sipem à Sipem";
        }
        if(this.historiquesArraylist[index].facture.expeditaire=='particulier'){
            tab2[i+3][0] = "Virement de la commission venant du client à Sipem";
          }
        tab2[i+3][4] = "";
        tab2[i+3][5] = "445700";
        tab2[i+3][1]="vte";
        tab2[i+3][2] = datetransaction;
        tab2[i+3][3] = this.historiquesArraylist[index].$key;
        tab2[i+3][6] = this.historiquesArraylist[index].facture.invoiceRef;
        tab2[i+3][7] = this.historiquesArraylist[index].facture.clientRef;         
        tab2[i+3][8] = this.historiquesArraylist[index].idAgent;
        tab2[i+3][9] = "";
        tab2[i+3][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission sipem ' + res;
        tab2[i+3][11] =0;
      tab2[i+3][12] = (this.comsip*20)/120;
        tab2[i+3][13]=res;
        tab2[i+4]=new Array(14);
        if(this.historiquesArraylist[index].facture.expeditaire=='agentsipem'){
            tab2[i+4][0] = "Virement de la commission venant de l'Agent Sipem à Sipem";
            tab2[i+4][4] = "";
            tab2[i+4][5] = "411001";
        }
        if(this.historiquesArraylist[index].facture.expeditaire=='particulier'){
            tab2[i+4][0] = "Virement de la commission venant du client à Sipem";
            tab2[i+4][4] = "411002";
            tab2[i+4][5] = "";
          }
        tab2[i+4][1]="vte";
        tab2[i+4][2] = datetransaction;
        tab2[i+4][3] = this.historiquesArraylist[index].$key;
        tab2[i+4][6] = this.historiquesArraylist[index].facture.invoiceRef;
        tab2[i+4][7] = this.historiquesArraylist[index].facture.clientRef;         
        tab2[i+4][8] = this.historiquesArraylist[index].idAgent;
        tab2[i+4][9] = this.historiquesArraylist[index].facture.expeditaire;
        tab2[i+4][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission sipem ' + res;
        tab2[i+4][11] =this.comsip;
        tab2[i+4][12] = 0;
        tab2[i+4][13]=res;
        i=i+5;
        }
      }
     
      this.test=false;
        }
          this.historiquesArray1 = tab2;
      }
    );
  }
  exportAsXLSX(){
 if(this.historiquesArray1!=undefined){
        this.excelService.exportAsExcelFile(this.historiquesArray1, 'liste'); 
      }
  } 
}