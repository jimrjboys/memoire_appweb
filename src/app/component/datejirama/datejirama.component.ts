import { Component, OnInit } from '@angular/core';
import { EmplacementService } from 'src/app/service/emplacement/emplacement.service';
import {ExcelService} from 'src/app/service/excel/excel.service';
import { FraisService } from 'src/app/service/frais/frais.service';
@Component({
  selector: 'app-datejirama',
  templateUrl: './datejirama.component.html',
  styleUrls: ['./datejirama.component.scss']
})
export class DatejiramaComponent implements OnInit {

  constructor(private excelService : ExcelService,private fraisService : FraisService,private emplacementService: EmplacementService) { }
  historiquesArraylist = [];
  historiquesArray2= [];
  tab3:any;
  compte: any=0;
  historiquesArray1 = [];
  dateDebut: any = "";
  soc:any;
  bq:any=1;
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
          var res3 = this.historiquesArraylist[index].facture.dateHour.split(" ");
          var datetransaction = res3[0].split("/");
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
        this.compte++;
            var mois = ['Janvier','Fevrier', 'Mars','Avril','Mai','Juin', 'Juillet','Aout','Septembre','Octobre', 'Novembre','Decembre']; 
            var d = this.historiquesArraylist[index].facture.mounth.split(' '); 
            for (let index = 0; index < mois.length; index++) {
              if(mois[index]==d[0]) {
              var x = (index + 1).toString();
              var days = (x.length <2)? '0'+x : x;  
              var y = d[1].toString().substr(2);
              var res = days + y ;
              }
            }
            var res2 = this.historiquesArraylist[index].facture.dateHour.split(" ");
            var datetransaction = res2[0];
                      tab2[i]=new Array(14);
                      tab2[i][0] = "Reception du virement de Sipem";
                      tab2[i][1]="CAIS";
                      tab2[i][2] = datetransaction;
                      tab2[i][3] = y+"CA"+this.bq;
                      tab2[i][4] = "512000";
                      tab2[i][5] = "";
                      tab2[i][6] = this.historiquesArraylist[index].facture.invoiceRef;
                      tab2[i][7] = this.historiquesArraylist[index].facture.clientRef;
                      tab2[i][8] = this.historiquesArraylist[index].idAgent;
                      tab2[i][9] = "";
                      tab2[i][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission ' + res;
                      tab2[i][11] = this.historiquesArraylist[index].facture.invoiceAmount-(this.comfin+this.comsip);
                      tab2[i][12] = 0;  
                    tab2[i][13]=res;         
                    tab2[i+1]=new Array(14);
                    tab2[i+1][5] = "411000";
                    tab2[i+1][0] = "Reception du virement de Sipem";
                    tab2[i+1][1]="CAIS";
                    tab2[i+1][2] = datetransaction;
                    tab2[i+1][3] = y+"CA"+this.bq;
                    tab2[i+1][4] = "";
                    tab2[i+1][6] = this.historiquesArraylist[index].facture.invoiceRef;
                    tab2[i+1][7] = this.historiquesArraylist[index].facture.clientRef;
                    tab2[i+1][8] = this.historiquesArraylist[index].idAgent;
                    tab2[i+1][9] = "Client Jirama";
                    tab2[i+1][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission ' + res;
                    tab2[i+1][11] =0;
                    tab2[i+1][12] = this.historiquesArraylist[index].facture.invoiceAmount-(this.comfin+this.comsip);
                    tab2[i+1][13]=res;
                    tab2[i+2]=new Array(14);
                    tab2[i+2][0] = "Constatation de la vente de prestation";
                    tab2[i+2][1]="VE";
                    tab2[i+2][2] = datetransaction;
                    tab2[i+2][3] = y+"VE"+this.bq;
                    tab2[i+2][4] = "";
                    tab2[i+2][5] = "706000";
                    tab2[i+2][6] = this.historiquesArraylist[index].facture.invoiceRef;
                    tab2[i+2][7] = this.historiquesArraylist[index].facture.clientRef;
                    tab2[i+2][8] = this.historiquesArraylist[index].idAgent;              
                    tab2[i+2][9] = "";
                    tab2[i+2][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission '+ res;
                    tab2[i+2][11] = 0;
                    tab2[i+2][12] = this.historiquesArraylist[index].facture.invoiceAmount-(this.comfin+this.comsip);
                    tab2[i+2][13]=res;
                    tab2[i+3]=new Array(14);
                    tab2[i+3][9] = "Client Jirama";
                    tab2[i+3][4] = "411000";
                    tab2[i+3][0] = "Constatation de la vente de prestation ";
                    tab2[i+3][1]="VE";
                    tab2[i+3][2] = datetransaction;
                    tab2[i+3][3] = y+"VE"+this.bq;
                    tab2[i+3][5] = "";
                    tab2[i+3][6] = this.historiquesArraylist[index].facture.invoiceRef;
                    tab2[i+3][7] = this.historiquesArraylist[index].facture.clientRef;
                    tab2[i+3][8] = this.historiquesArraylist[index].idAgent; 
                    tab2[i+3][10]=this.historiquesArraylist[index].facture.invoiceRef + ' commission ' + res;
                    tab2[i+3][11] =this.historiquesArraylist[index].facture.invoiceAmount-(this.comfin+this.comsip);
                    tab2[i+3][12] = 0;
                    tab2[i+3][13]=res;   
                       i=i+4;
                       this.bq++;
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