import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrearEventoPage } from '../crear-evento/crear-evento';


// import { VerEventoPage } from '../ver-evento/ver-evento';
// import { CrearEventoPage } from '../crear-evento/crear-evento';

/**
 * Generated class for the VistaDiariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vista-diaria',
  templateUrl: 'vista-diaria.html',
})
export class VistaDiariaPage {

	events = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaDiariaPage');
  }

  verEvento(id)
  {
  	
  }

  newEvent()
  {
    this.navCtrl.push(CrearEventoPage);
  }


}
