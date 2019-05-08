import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the CrearEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-evento',
  templateUrl: 'crear-evento.html',
})
export class CrearEventoPage {

	event = {id: null, 
			title: null,
			fecha: null,
			hora: null,
			descripcion: null,
			direccion: null,
			recordatorio: null,
			repeticion: null};

	id = null;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.id = navParams.get('id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearEventoPage');
  }

  disableTime()
  {
  	console.log("deshabilitado");
  }

}
