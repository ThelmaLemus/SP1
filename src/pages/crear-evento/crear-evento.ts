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
		dstartDate: null,
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
		console.log('This is the uid: ', this.uid);
		
		if (this.eid != undefined) 
		{
			eventServices.getEventF(this.uid, this.eid).valueChanges()
			.subscribe(event => {
				this.event = event;
				console.log( this.event.startDate);
				
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
		if (this.event.title == null ||
			this.event.startDate == null ||
			this.event.endDate == null ||
			this.event.allday == null ||
			this.event.reminder == null) 
		{
			alert("Por favor llene todos los campos");
		}

		else {
			this.event.dstartDate = this.event.startDate.substr(8,9) +"-"+ this.event.startDate.substr(5,2) +"-"+ this.event.startDate.substr(0,4);
			// this.event.endDate = this.event.endDate.substr(8, 9) + "-" + this.event.endDate.substr(5, 2) + "-" + this.event.endDate.substr(0, 4);
			this.eventServices.createEventF(this.uid, this.event);
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
			this.event.dstartDate = this.event.startDate.substr(8,9) +"-"+ this.event.startDate.substr(5,2) +"-"+ this.event.startDate.substr(0,4);
			this.eventServices.createEventF(this.uid, this.event);
			// this.usersService.editUserF(this.user);
			this.navCtrl.pop();

		}
	}
}
