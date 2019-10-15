import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocieteComponent } from './component/societe/societe.component';
import { DateComponent } from './component/date/date.component';
import { AllComponent } from './component/all/all.component';
import { RefComponent } from './component/ref/ref.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { JiramaComponent } from './component/jirama/jirama.component';
import { AllfintekComponent } from './component/allfintek/allfintek.component';
import { SocietefintekComponent } from './component/societefintek/societefintek.component';
import { ReffintekComponent } from './component/reffintek/reffintek.component';
import { DatefintekComponent } from './component/datefintek/datefintek.component';
import { DatejiramaComponent } from './component/datejirama/datejirama.component';
import { RefjiramaComponent } from './component/refjirama/refjirama.component';
import { AlljiramaComponent } from './component/alljirama/alljirama.component';
import { PrelevementComponent } from './component/prelevement/prelevement.component';
import { DepotComponent } from './component/depot/depot.component';
import { AddGestComponent } from './component/add-gest/add-gest.component';
const routes: Routes = [
  { path:'societe', component:SocieteComponent },
  { path:'date', component:DateComponent },
  { path:'all', component:AllComponent },
  { path:'ref', component:RefComponent },
  { path:'accueil', component:AccueilComponent }, 
  { path:'jirama', component:JiramaComponent }, 
  { path:'allfintek', component:AllfintekComponent }, 
  { path:'societefintek', component:SocietefintekComponent }, 
  { path:'reffintek', component:ReffintekComponent }, 
  { path:'datefintek', component:DatefintekComponent }, 
  { path:'alljirama', component:AlljiramaComponent }, 
  { path:'refjirama', component:RefjiramaComponent }, 
  { path:'datejirama', component:DatejiramaComponent }, 
  { path:'prelevement', component:PrelevementComponent },
  { path:'depot', component:DepotComponent },
  { path:'add-gest', component:AddGestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
