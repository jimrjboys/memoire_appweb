import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FraisService {
  constructor(private firebase: AngularFireDatabase) { 
  }
  commission: AngularFireList<any>;
  getCommission() {
    this.commission = this.firebase.list('societe');
    return this.commission.snapshotChanges();
  }
  getCommissionFintek() {
    this.commission =  this.firebase.list('societe/FINTEK');
    return this.commission;
     }
  
     updateCommissionFintek(commission: any): void {
      this.firebase.object('societe/FINTEK/' + commission.$key)
        .update({ fraisTrasac: commission.fraisTrasac , depotmin: commission.depotmin });
    }
}
