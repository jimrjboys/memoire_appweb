import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
 import { ReactiveFormsModule, FormsModule } from "@angular/forms";
 import { AngularFireModule } from 'angularfire2';
 import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe, registerLocaleData } from '@angular/common';
//import { OrderModule } from 'ngx-order-pipe';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';
import { HttpClientModule } from "@angular/common/http";
import { SocieteComponent } from './component/societe/societe.component';
import { DateComponent } from './component/date/date.component';
import { AllComponent } from './component/all/all.component';
import { RefComponent } from './component/ref/ref.component';
import { JiramaComponent } from './component/jirama/jirama.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AllfintekComponent } from './component/allfintek/allfintek.component';
import { SocietefintekComponent } from './component/societefintek/societefintek.component';
import { DatefintekComponent } from './component/datefintek/datefintek.component';
import { ReffintekComponent } from './component/reffintek/reffintek.component';
import { AlljiramaComponent } from './component/alljirama/alljirama.component';
import { RefjiramaComponent } from './component/refjirama/refjirama.component';
import { DatejiramaComponent } from './component/datejirama/datejirama.component'

import { PrelevementComponent } from './component/prelevement/prelevement.component';
import { DepotComponent } from './component/depot/depot.component';
import { AddGestComponent } from './component/add-gest/add-gest.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
const ngxUiLoaderConfig:NgxUiLoaderConfig= {
  bgsColor: "#00ACC1",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 5,
  fgsColor: "#266b9e",
  fgsPosition: "center-center",
  fgsSize: 60,
  fgsType: "ball-spin-clockwise",
  gap: 24,
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "#266b9e",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: true,
  text: "chargement en cours ...",
  textColor: "#FFFFFF",
  textPosition: "center-center"
}
@NgModule({
  declarations: [
    AppComponent,
    
    AppComponent,
    
    SocieteComponent,
    
    DateComponent,
    
    AllComponent,
    
    RefComponent,
    
    JiramaComponent,
    
    AccueilComponent,
    
    AllfintekComponent,
    
    SocietefintekComponent,
    
    DatefintekComponent,
    
    ReffintekComponent,
    
    AlljiramaComponent,
    
    RefjiramaComponent,
    
    DatejiramaComponent,

    PrelevementComponent,

    DepotComponent,

    AddGestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule,
   // BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    //BrowserAnimationsModule,
    ToastContainerModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderModule,
    FlexLayoutModule
   // OrderModule
    //nouveau
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
