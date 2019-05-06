import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registro2Page } from '../registro2/registro2';
import { UsersService } from '../../services/users.service';


/**
 * Generated class for the Registro1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro1',
  templateUrl: 'registro1.html',
})
export class Registro1Page {
  user:any = {id: null, nombre :null, username:null, correo:null, password:null, password2:null, sexo:null, myDate:null, trabaja:null, estudia:null};
  password2 = '';
  
  id = null;
  edited = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
    this.id = navParams.get('id');
    // this.id =  1;
    // console.log("Nombre: " + this.id );
    if (this.id != undefined) {
      usersService.getUser(this.id).valueChanges()
      .subscribe(user=> {
        this.user = user;
      });
    }else
    {
      this.user.id = this.id;
      // console.log("dif:" + this.id);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro1Page');
  }
  
  public addUser()
  {
    if (this.user.id != undefined) 
    {
      // console.log("entro: " + this.user.id);
      this.usersService.editUserF(this.user);
      this.navCtrl.push(Registro2Page, { id: this.user.id, edited: 1 });
    }else
    {
      // console.log("user " + this.user);
      this.newUser();
    }
    
  }


  private newUser() {
    this.user.id = Date.now();
    if (this.user.nombre == null || this.user.username == null || this.user.correo == null || this.user.password == null || this.password2 == null) {
      alert("Por favor llene los campos");
    }
    else if (this.user.password != this.password2) {
      alert("Las contraseñas no coinciden");
    }
    else {
      
      // console.log("Nombre: " + this.user.nombre);
      // console.log("Username: " + this.user.username);
      // console.log("Correo: " + this.user.correo);
      // console.log("Password: " + this.user.password);
      // console.log("Id: " + this.user.id);
      this.usersService.createUser(this.user);
      this.navCtrl.push(Registro2Page, { id: this.user.id });
    }
  }


  deleteUser() {
    this.usersService.deleteUser(this.user);
    this.navCtrl.pop();
  }
}
