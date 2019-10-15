import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as  firebase from  'firebase'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AbonementService {
  ListAbonement: AngularFireList<any>;
  item : Observable<any>;
  protected __Abonement = 'Abonement';
  constructor(private firebase: AngularFireDatabase , db: AngularFireDatabase)
  {
   this.item = firebase.object('abonement/tarif/1/').valueChanges();
  }
getListAbonement()
{
    this.ListAbonement=this.firebase.list('Abonement');
    return this.ListAbonement.snapshotChanges();
}
getTarif2 () {
  return new Promise ((resolve, reject)=>{
    let data : firebase.database.Reference = firebase.database().ref('Abonement/tarif')
      data.on('value', dataSnapshot =>{
        console.log(dataSnapshot.val()),
        resolve(dataSnapshot.val())
      })
  })
}
updateTarif1(new_prix){
  return new Promise((resolve) => {
    let $ref = this.firebase.list(`Abonement/`)
    console.log($ref)
    $ref.update(`/tarif/1/`, {
      prix:new_prix
    })
    .then(() => {
      resolve()
    }, (error) => {
      console.error(error)
    })
  })
}
updateTarif2(new_prix){
  return new Promise((resolve) => {
    let $ref = this.firebase.list(`Abonement/`)
    console.log($ref)
    $ref.update(`/tarif/2/`, {
      prix:new_prix
    })
    .then(() => {
      resolve()
    }, (error) => {
      console.error(error)
    })
  })
}
updateTarif3(new_prix){
  return new Promise((resolve) => {
    let $ref = this.firebase.list(`Abonement/`)
    console.log($ref)
    $ref.update(`/tarif/3/`, {
      prix:new_prix
    })
    .then(() => {
      resolve()
    }, (error) => {
      console.error(error)
    })
  })
}
writeNewPost1(prix) {
  // A post entry.
  var postData = {
  '1':prix
  };
  // Get a key for a new Post.
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/Abonement/tarif/'+prix] = postData;
  return firebase.database().ref().update(updates);
}
}
