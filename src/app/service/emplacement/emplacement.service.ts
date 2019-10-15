import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EmplacementService {
  constructor(private firebase: AngularFireDatabase) {
  }
  emplacementList: AngularFireList<any>;
  transactionHistory:AngularFireList<any>;
  transactionHistoryko:AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    localisation: new FormControl('', Validators.required),
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    societe: new FormControl('', Validators.required)
  });

  formsociete= new FormGroup({
     societe: new FormControl('', Validators.required)
  });
  getEmplacement() {
    this.emplacementList = this.firebase.list('emplacement');
    return this.emplacementList.snapshotChanges();
  }

  //historiques
  getHistoriques(){
    this.transactionHistory=this.firebase.list('transactionHistory');
    return this.transactionHistory.snapshotChanges();
  }
  getHistoriquesko(){
    this.transactionHistoryko=this.firebase.list('transactionKO');
    return this.transactionHistoryko.snapshotChanges();
  }
  insertEmplacement(emplacement) {
    this.emplacementList.push({
      localisation: emplacement.localisation,
      latitude: emplacement.latitude,
      longitude: emplacement.longitude,
      designation: emplacement.designation,
      societe: emplacement.societe
    });
  }
  populateForm(emplacement) {
    this.form.setValue(emplacement);

   // console.log(this.form.setValue(emplacement));
  }
   updateEmplacement(emplacement) {
    this.emplacementList.update(emplacement.$key,
      {
        localisation: emplacement.localisation,
        latitude: emplacement.latitude,
        longitude: emplacement.longitude,
        designation: emplacement.designation,
        societe: emplacement.societe
      });
  }
  deleteEmplacement($key: string) {
    this.emplacementList.remove($key);

  }

}
