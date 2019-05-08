import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../services/users.service';
import { Registro1Page } from '../registro1/registro1';
import { VistaDiariaPage } from '../vista-diaria/vista-diaria';
// import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users = [];
  user:any = {id: null, nombre :null, username:null, correo:null, password:null, sexo:"", myDate:"", trabaja:null, estudia:null};
  username = null;
  password = null;
  constructor(public navCtrl: NavController, public usersService: UsersService) {
    usersService.getUsers().valueChanges()
    .subscribe(users => {
      this.users = users;
      // debugger 
    });
  }
 
  iniciarSesion(){
    // debugger
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username == this.username && this.users[i].password == this.password) {
        console.log("Inició sesión correctamente");
        this.navCtrl.push(VistaDiariaPage);
        break; 
      }else{
        alert("Usuario o contraseña incorrectos");
        break;
      }
      
    }
  }
  gotoWel(id)
  {
    this.navCtrl.push(Registro1Page, { id:id, edited:1 });
  }

  registrarse()
  {
  	this.navCtrl.push(Registro1Page);
  }
  public dddd(id) {
    this.usersService.getUserF(id).valueChanges()
    .subscribe(user => {
      this.user = user;
    });
    this.usersService.deleteUser(this.user);
  }
}
