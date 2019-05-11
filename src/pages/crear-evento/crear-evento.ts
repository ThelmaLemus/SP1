import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServices } from '../../services/events.services';



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
export class CrearEventoPage
{
	event = 
	{	
		id: null, 
		title: null,
		startDate: null,
		endDate: null,
		descripcion: null,
		direccion: null,
		recordatorio: null,
		repeticion: null
	};
	
	id = null;

	constructor(public navCtrl: NavController, public navParams: NavParams, public eventServices: EventServices) {
  	this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearEventoPage');
  }

  disableTime()
  {
  	console.log("deshabilitado");
  }

	guardarEvento(){

	}



	private newEvent() {
		this.event.id = Date.now();
		if (this.event.title == null ||
			 this.event.sdate == null ||
			 this.event.edate == null ||
			 this.event.password == null ||
			 this.password2 == null) {
			alert("Por favor llene los campos");
		}
		else if (this.event.password != this.password2) {
			alert("Las contraseñas no coinciden");
		}
		else {

			// console.log("Nombre: " + this.event.nombre);
			// console.log("Username: " + this.eventname);
			// console.log("Correo: " + this.event.correo);
			// console.log("Password: " + this.event.password);
			// this.event.sexo="";
			// this.event.myDate="";
			this.eventsService.createUser(this.event);
			// console.log("Id: " + this.event.id);
			this.navCtrl.push(Registro2Page, { id: this.event.id, edited: 0 });
		}
	}
}
