import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { EmplacementService } from 'src/app/service/emplacement/emplacement.service';
@Component({
  selector: 'app-prelevement',
  templateUrl: './prelevement.component.html',
  styleUrls: ['./prelevement.component.scss']
})
export class PrelevementComponent implements OnInit,AfterViewInit {

  historiquesArraylist:any;
  thebest : any ;
  intervalId :any ;

  constructor(private emplacementService: EmplacementService,private datePipe: DatePipe) {
   }
   date_to_parse : any = new Date();
   year : any = this.date_to_parse.getFullYear().toString();
   month : any = (this.date_to_parse.getMonth() + 1).toString();
   day : any = this.date_to_parse.getDate().toString();
   months : any = (this.month.length <2)? '0'+this.month : this.month;
   days : any = (this.day.length <2)? '0'+this.day : this.day;
   date_now : any = this.days+'/'+this.months+'/'+this.year;
  ngOnInit() {
    // chargement de données de firebase
    this.loadata();
  }
  ngAfterViewInit() {
    // attente de 5 secondes avant impression  en pdf
    //procedure javascript
   // var intervalId = setInterval(()=>{this.letsprint();clearInterval(intervalId);}, 10000);
  }
  loadata(){
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
        var month = (date_to_parse.getMonth()+ 1).toString();
        var day = date_to_parse.getDate().toString();
        var months = (month.length <2)? '0'+month : month;
        var days = (day.length <2)? '0'+day : day;
        var date_now = days+'/'+months+'/'+year;
        this.thebest = this.historiquesArraylist.filter(function (v) {
        return (v.facture.dateHour == date_now);
        });
      });
  }
  letsprint(){
    var date_now= "";
    var date_to_parse = new Date();
    var year = date_to_parse.getFullYear().toString();
    var month = (date_to_parse.getMonth() + 1).toString();
    var day = date_to_parse.getDate().toString();
    var months = (month.length <2)? '0'+month : month;
    var days = (day.length <2)? '0'+day : day;
    var date_now =year+months+days

    var data = document.getElementById('target');
    html2canvas(data).then(canvas => {
    // tsy azo kitihina don't touch
    var imgWidth = 200;
    var pageHeight = 235;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4');
    var position = 0;
    pdf.addImage(contentDataURL,'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('PaiJir_ '+date_now+'.pdf');
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
    var date_now = days+'/'+months+'/'+year;
    var data = document.getElementById('target');
    html2canvas(data).then(canvas => {
    // tsy azo kitihina / don't touch
    var imgWidth = 210;
    var pageHeight = 235;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4');
    var position = 0;
    pdf.addImage(contentDataURL,'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('exportation_'+date_now+'.pdf');
    });
  }
}
