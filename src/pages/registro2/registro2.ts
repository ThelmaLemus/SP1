import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BienvenidoPage } from '../bienvenido/bienvenido';
import { UsersService } from '../../services/users.service';

/**
 * Generated class for the Registro2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 //DD/MM/YYYY

@IonicPage()
@Component({
  selector: 'page-registro2',
  templateUrl: 'registro2.html',
})
export class Registro2Page {
  id = null;
  edited = 0;
  user:any = {id: null, nombre :null, username:null, correo:null, password:null, password2:null, sexo:null, myDate:null, trabaja:null, estudia:null};
  
//  formattedDate;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
    this.id = navParams.get('id');
    usersService.getUser(this.id).valueChanges()
    .subscribe(user=> {
      this.user = user;
    });
    // console.log("Id: " + this.user.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro2Page');
  }

  continuar2()
  {
    /* var mydate = new Date.get();
    var year = mydate.getFullYear().toString();
    var month = mydate.getMonth().toString();
    var day = mydate.getDate().toString();

    this.formattedDate = year + month + day;
    */
   
    this.user.myDate = new Date().toISOString();
    if(this.user.sexo == undefined || this.user.myDate == undefined)
    {
      alert("Por favor llene los campos");
    }
    else
    {
      this.user.myDate = this.user.myDate.toISOString();
      // console.log("sexo: " + this.user.nombre);
      // console.log("mydate: " + this.user.myDate);
      // console.log("trabajas: " + this.user.trabaja);
      // console.log("estudias: " + this.user.estudia);
      this.usersService.createUserF(this.user);
      this.navCtrl.pop();
      this.navCtrl.pop();
    }
  }


}
