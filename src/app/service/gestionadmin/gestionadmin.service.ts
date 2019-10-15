import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GestionadminService {

  constructor(private firebase: AngularFireDatabase) { }
  gestionadminList: AngularFireList<any>;
  formacces = new FormGroup({
    id: new FormControl('', Validators.required),
   // names: new FormControl('', Validators.required),
    ajoutacces: new FormControl('', Validators.required),
    modifacces: new FormControl('', Validators.required),
    suppressionacces: new FormControl('', Validators.required),
    exportacces: new FormControl('', Validators.required),
    visibiliteacces: new FormControl('', Validators.required),
    ajoutaffectation: new FormControl('', Validators.required),
    modifaffectation: new FormControl('', Validators.required),
    suppressionaffectation: new FormControl('', Validators.required),
    exportaffectation: new FormControl('', Validators.required),
    visibiliteaffectation: new FormControl('', Validators.required),
    ajoutfondcaisse: new FormControl('', Validators.required),
    modiffondcaisse: new FormControl('', Validators.required),
    suppressionfondcaisse: new FormControl('', Validators.required),
    exportfondcaisse: new FormControl('', Validators.required),
    visibilitefondcaisse: new FormControl('', Validators.required),
    ajoutencaissement: new FormControl('', Validators.required),
    modifencaissement: new FormControl('', Validators.required),
    suppressionencaissement: new FormControl('', Validators.required),
    exportencaissement: new FormControl('', Validators.required),
    visibiliteencaissement: new FormControl('', Validators.required),
    ajoutterminaux: new FormControl('', Validators.required),
    modifterminaux: new FormControl('', Validators.required),
    suppressionterminaux: new FormControl('', Validators.required),
    exportterminaux: new FormControl('', Validators.required),
    visibiliteterminaux: new FormControl('', Validators.required),
    exportlisteagent: new FormControl('', Validators.required),
    visibilitelisteagent: new FormControl('', Validators.required),
    visibilitegeolocalisation: new FormControl('', Validators.required),
    visibilitenbtransaction: new FormControl('', Validators.required),
    visibilitenouveauemplacement: new FormControl('', Validators.required),
    modifprofil: new FormControl('', Validators.required),
    visibiliteprofil: new FormControl('', Validators.required)
  })
  getgestionadmin() {
    this.gestionadminList = this.firebase.list('gestionadmin');
    return this.gestionadminList.snapshotChanges();
  }
  insergestionadmin(idus,temp,soci){

    this.gestionadminList.push({
      id:"p "+idus,
      
      acces:{
      ajoutacces: false ,
        modifacces: false,
        suppressionacces:false,
        visibilite: true
      },

      affectation:{
      ajoutaffectation:true,
      modifaffectation: true,
      suppressionaffectation:true,
      exportaffectation:true,
      visibiliteaffectation:true,
      },

      geolocalisation:{
      visibilitegeolocalisation:true},

      fondcaisse:{
      ajoutfondcaisse:true,
      modiffondcaisse: true,
      suppressionfondcaisse:true,
      exportfondcaisse:true,
      visibilitefondcaisse:true},
      
      terminaux:{
      ajoutterminaux:true,
      modifterminaux: true,
      suppressionterminaux:true,
      exportterminaux:true,
      visibiliteterminaux:true},

      nbtransaction:{
      visibilitenbtransaction:true},

      nouveauemplacement:{
      visibilitenouveauemplacement:true},
      
      profil:{
      modifprofil:true,
      visibiliteprofil:true},

      listeagent:{
      exportlisteagent:true,
      visibilitelisteagent:true},
      
      seuilencaissement:{
      ajoutencaissement:true,
      modifencaissement: true,
      supprencaissement:true,
      exportencaissement:true,
      visibiliteencaissement:true}, 
      names:temp,
      societe:soci
    });
  }
  updateacces(acces){
    this.gestionadminList.update(acces.id,
      {
        acces:{
        ajoutacces: acces.ajoutacces,
        modifacces: acces.modifacces,
        suppressionacces: acces.suppressionacces,
        visibilite: acces.visibiliteacces
        },
        affectation:{
        ajoutaffectation: acces.ajoutaffectation,
        modifaffectation: acces.modifaffectation,
        suppressionaffectation: acces.suppressionaffectation,
        exportaffectation: acces.exportaffectation,
        visibiliteaffectation: acces.visibiliteaffectation
        },
        seuilencaissement:{
        ajoutencaissement: acces.ajoutencaissement,
        modifencaissement: acces.modifencaissement,
        supprencaissement: acces.suppressionencaissement,
        exportencaissement: acces.exportencaissement,
        visibiliteencaissement: acces.visibiliteencaissement
        },
        terminaux:{
        ajoutterminaux: acces.ajoutterminaux,
        modifterminaux: acces.modifterminaux,
        suppressionterminaux: acces.suppressionterminaux,
        exportterminaux: acces.exportterminaux,
        visibiliteterminaux: acces.visibiliteterminaux
        },
        fondcaisse:{
        ajoutfondcaisse: acces.ajoutfondcaisse,
        modiffondcaisse: acces.modiffondcaisse,
        suppressionfondcaisse: acces.suppressionfondcaisse,
        exportfondcaisse: acces.exportfondcaisse,
        visibilitefondcaisse: acces.visibilitefondcaisse
        },
        listeagent:{
        exportlisteagent: acces.exportlisteagent,
        visibilitelisteagent: acces.visibilitelisteagent
        },
        profil:{
        modifprofil: acces.modifprofil,
        visibiliteprofil: acces.visibiliteprofil
        },
        geolocalisation:{
        visibilitegeolocalisation: acces.visibilitegeolocalisation,
        },
        nbtransaction:{
        visibilitenbtransaction: acces.visibilitenbtransaction},
        nouveauemplacement:{
        visibilitenouveauemplacement: acces.visibilitenouveauemplacement
        }
      });
  }
}
