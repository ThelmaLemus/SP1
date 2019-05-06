import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelPage } from '../wel/wel';
import { UsersService } from '../../services/users.service';
import { Registro1Page } from '../registro1/registro1';
// import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users = [];
  constructor(public navCtrl: NavController, public usersService: UsersService) {
    this.users = usersService.getUsers();
  }

  gotoWel(id)
  {
    this.navCtrl.push(Registro1Page, { id:id });
  }

  registrarse()
  {
  	this.navCtrl.push(Registro1Page);
  }
}
