import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://frhb12419ds.ikexpress.com:5788/cyclos/api/";
  private putUserUrl = "http://frhb12419ds.ikexpress.com:5788/cyclos/api/users"
  private authUrl = "http://frhb12419ds.ikexpress.com:5788/cyclos/api/auth/session";
  private usersUrl = "http://frhb12419ds.ikexpress.com:5788/cyclos/api/users";
  private tpeUrl = "http://192.168.1.250/bankcard/app.php/api/tpe";
  private url = "http://frhb12419ds.ikexpress.com:5788/cyclos/api/" ;
 constructor(private http: HttpClient, private route: ActivatedRoute) { }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  formpost = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', (Validators.required,Validators.email) ),
    group: new FormControl(''),
    nameimage: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    profil: new FormControl('', Validators.required),
    societe: new FormControl(''),
    cin: new FormControl(''),
        type: new FormControl(''),
        value: new FormControl(''),
        checkConfirmation: new FormControl(''),
        confirmationValue: new FormControl(''),
        forceChange: new FormControl('')
  })
  
  formIdUser = new FormGroup({
    iduser: new FormControl('', Validators.required)
  })
  formPutUser = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    version: new FormControl(''),
    location: new FormControl('')
  })
  //Modification information personnel UTILISATEUR Connecté
  formPutMyInfo = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    checkpassword : new FormControl(''), 
    ancientpassword: new FormControl(''),
    newpassword: new FormControl(''),
    confirmnewpasswords: new FormControl(''),
    version : new FormControl(''),
    id : new FormControl('')
  })
// authentification avec cyclos
  userAuth() {
    var data: any;
    var reqHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + this.getHash()
    });
    return this.http.post(this.authUrl+"?timeoutInSeconds=12000", data, { headers: reqHeaders })
  }
  //authentification avec cyclos avec la durrée d'expiration de connexion
// recuperation des agents cyclos
  getAgent() {
    var reqHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Accept': 'application/json',
       'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv',
    });
    return this.http.get(this.usersUrl, { headers: reqHeaders })
  }
//recuperation des encaissements de cyclos
  getEncaissement(iduser) {
    var headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Basic '+this.getHash()
    });
    return this.http.get(this.apiUrl + iduser + "/accounts/user/history", { headers: headers })
  }
  //recuperation des historiques d'encaissement
  getHistoryUser(idcompte,iduser) {
    var headers = new HttpHeaders({
      'Accept': 'application/json',
       'Authorization': 'Basic '+this.getHash()
    });
    let url=this.apiUrl+idcompte+"/accounts/user/history?customFields=idAgent:"+iduser;
    return this.http.get(this.apiUrl+idcompte+"/accounts/user/history?customFields=idAgent:"+iduser, {headers:headers})
  }
  // recuperation d'agent par son id en paramètre
  getUser(iduser) {
    var headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv'
    });
    let url = this.apiUrl + "users/" + iduser;
    return this.http.get(this.apiUrl + "users/" + iduser, { headers: headers })
  }
  // recuperation de données pour la modification d'agent de cyclos
  dataforedit(iduser) {
    var headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv'
    });
    let url = this.usersUrl + "/" + iduser + "/data-for-edit";
    return this.http.get(this.usersUrl + "/" + iduser + "/data-for-edit", { headers: headers })
  }
  // modification d'agent avec son id en paramètre
  putUser(iduser) {
    var data = ({
      "customValues": {
        "location": this.formPutUser.get('location').value
      },
      "name": this.formPutUser.get('name').value,
      "username": this.formPutUser.get('username').value,
      "version": this.formPutUser.get('version').value,
    });
 var headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv'
    });
    let url = this.usersUrl + "/" + iduser;
    return this.http.put(this.usersUrl + "/" + iduser, data, { headers: headers })
  }
postUser(soci) {
  var data = ({
    "customValues": {
      "profil": this.formpost.get('profil').value,
      "agent": soci,
      "cin": this.formpost.get('cin').value
    },
    "name": this.formpost.get('name').value,
    "username": this.formpost.get('username').value,
    "group": "members",
    "passwords": {
        "type": "login",
        "value": this.formpost.get('value').value,
        "checkConfirmation": true,
        "confirmationValue": this.formpost.get('confirmationValue').value,
        "forceChange": true
  }
  });
  var headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv'
  });
  return this.http.post(this.usersUrl, data, { headers: headers })
}
  public getHash(): string {
    if (this.form.get('name').value && this.form.get('password').value)
      return btoa(this.form.get('name').value + ':' + this.form.get('password').value);
  }

  putUsers(version,id) {
    var data = ({
      "name": this.formPutMyInfo.get('name').value,
      "username": this.formPutMyInfo.get('username').value,
      "email" : this.formPutMyInfo.get('email').value,
      "passwords": {
          "type": "login",
          "value": this.formPutMyInfo.get('confirmnewpasswords').value,
          "checkConfirmation": true,
          "confirmationValue": this.formPutMyInfo.get('confirmnewpasswords').value,
          "forceChange": true
      }, 
      "version" : version
    });
    var headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv'
    });
    return this.http.put(this.putUserUrl + "/" + id , data, { headers: headers })
  }
  postimage(file,id) {
      let input = new FormData();
      input.append('image', file[0]);
      input.append('id', id);
      input.append('contentType', "image/png");
      input.append('name', this.formpost.get('nameimage').value);
      input.append('url', this.formpost.get('image').value);
      input.append('width', '220');
      input.append('height', '220');
      input.append('length', '75225');
        var headers = new HttpHeaders({
          'Accept':'text/plain',
          'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv'
        });
    return this.http.post(this.url+id+'/images', input, { headers: headers });
  }
  postphone(id){
    var data = ({
      "id": id,
      "name": this.formPutMyInfo.get('username').value,
      "number": this.formPutMyInfo.get('phone').value,
      "type":"mobile",  
      "enabledForSms": true,
      "verified": true,
      "kind": "mobile"
    });
    var headers = new HttpHeaders({
       'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization': 'Basic YWRtaW5ibzphZG1pbmJv'
      });
  }
}