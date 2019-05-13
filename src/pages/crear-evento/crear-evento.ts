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
	event: any = 
	{	
		id: null,
		uid: null, 
		title: null,
		startDate: null,
		endDate: null,
		location: null,
		allday: null,
		repeat: null,
		reminder: null,
		description: null
	};
	
	uid = null;
	eid = null;
	constructor(public navCtrl: NavController, public navParams: NavParams, public eventServices: EventServices) {
		this.uid = navParams.get('uid');
		this.eid = navParams.get('eid'); 
		console.log("el uid: " + this.uid);
		if (this.eid != undefined) 
		{
			eventServices.getEventF(this.eid).valueChanges()
			.subscribe(event => {
				this.event = event;
			});
		}
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearEventoPage');
  }

  disableTime()
  {
		// this.event.allday = true;
		console.log("DisableTime");
		
  }

	crearEvento(){
		if (this.eid != undefined) 
		{
			this.editEvent();
		}else
		{
			this.newEvent();
		}
	}



	private newEvent() {
		this.event.id = 'e'+ Date.now();
		this.event.uid = this.uid;
		if (this.event.title == null ||
			this.event.startDate == null ||
			this.event.endDate == null ||
			this.event.allday == null ||
			this.event.reminder == null) 
		{
			alert("Por favor llene todos los campos");
		}

		else {

			this.eventServices.createEventF(this.event, this.uid);
			this.navCtrl.pop();

		}
	}



	private editEvent () {
		if (this.event.title == "" ||
			this.event.startDate == "" ||
			this.event.endDate == "" ||
			this.event.allday == "" ||
			this.event.reminder == "") {
			alert("Por favor llene todos los campos");
		}else
		{
			this.eventServices.createEventF(this.event, this.uid);
			// this.usersService.editUserF(this.user);
			this.navCtrl.pop();

		}
	}
}
