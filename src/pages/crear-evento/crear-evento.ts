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
		location: null,
		allday: null,
		repeat: null,
		reminder: null,
		description: null
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
		// this.event.allday = true;
		console.log("DisableTime");
		
  }

	guardarEvento(){
		this.newEvent();
	}



	private newEvent() {
		this.event.id = 'e'+ Date.now();
		if (this.event.title == null ||
			this.event.startDate == null ||
			this.event.endDate == null ||
			this.event.allday == null ||
			this.event.reminder == null) 
		{
			alert("Por favor llene todos los campos");
		}
		// else if (this.event.password != this.password2) {
		// 	alert("Las contraseñas no coinciden");
		// }
		else {

			console.log("Nombre: " + this.event.id);
			console.log("Username: " + this.event.title);
			console.log("Correo: " + this.event.location);
			console.log("Password: " + this.event.allday);
			console.log("Correo: " + this.event.startDate);
			console.log("Password: " + this.event.endDate);
			console.log("Password: " + this.event.repeat);
			console.log("Correo: " + this.event.reminder);
			console.log("Password: " + this.event.description);
			// this.event.sexo="";
			// this.event.myDate="";
			
			// this.eventServices.createEvent(this.event);

			// console.log("Id: " + this.event.id);
			// this.navCtrl.push(Registro2Page, { id: this.event.id, edited: 0 });
		}
	}
}
