import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
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
	sday = null;
	smonth = null;
	syear = null;
	shour = null;
	sminute = null;
	
	saa = null;
	
	fday = null;
	fmonth = null;
	fyear = null;
	fhour = null;
	fminute = null;

	sbackDate = null;
	ebackDate = null;
	
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
				this.sbackDate = this.event.startDate;
				this.ebackDate = this.event.endDate;
				
			});
		}
  	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CrearEventoPage');
	}

  	disableTime()
	{
			// this.event.allday = true;
			var x = document.getElementById("Time");
			if (x.style.display === "none") {
				console.log("EnableTime");
				x.style.display = "block";
			} else {
				console.log("DisableTime");
				x.style.display = "none";
			}
			// document.getElementById("StartHour").style.display = "none";
			
	}

	validateTime()
	{
		this.sday = this.event.startDate.substr(8,9);
		this.smonth = this.event.startDate.substr(5, 2);
		this.syear = this.event.startDate.substr(0,4);
		this.shour = this.event.startDate.substr(11, 2);
		this.sminute = this.event.startDate.substr(14,2);
		
		this.fday = this.event.endDate.substr(8,9);
		this.fmonth = this.event.endDate.substr(5, 2);
		this.fyear = this.event.endDate.substr(0,4);
		this.fhour = this.event.endDate.substr(11, 2);
		this.fminute = this.event.endDate.substr(14,2);


		this.sday = parseInt(this.sday, 10);
		this.smonth = parseInt(this.smonth, 10);
		this.syear = parseInt(this.syear, 10);
		this.shour = parseInt(this.shour, 10);
		this.sminute = parseInt(this.sminute, 10);

		this.fday = parseInt(this.fday, 10);
		this.fmonth = parseInt(this.fmonth, 10);
		this.fyear = parseInt(this.fyear, 10);
		this.fhour = parseInt(this.fhour, 10);
		this.fminute = parseInt(this.fminute, 10);
		debugger
		if (this.sday > this.fday|| this.smonth > this.fmonth || this.syear > this.fyear)
		{
			alert("Elija un rango de fechas válido");
			this.event.startDate = this.sbackDate;
			this.event.endDate = this.ebackDate;
		}
		console.log(this.event.endDate);
		
	}

	crearEvento()
	{
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
			this.event.reminder == null) 
		{
			alert("Por favor llene todos los campos");
		}

		else {
			debugger
			this.event.dstartDate = this.event.startDate.substr(8,2) +"-"+ this.event.startDate.substr(5,2) +"-"+ this.event.startDate.substr(0,4);
			// this.event.endDate = this.event.endDate.substr(8, 9) + "-" + this.event.endDate.substr(5, 2) + "-" + this.event.endDate.substr(0, 4);
			this.eventServices.createEventF(this.uid, this.event);
			this.navCtrl.pop();
			
		}
	}

	
	
	private editEvent () {
		if (this.event.title == "" ||
		this.event.startDate == "" ||
		this.event.endDate == "" ||
		this.event.reminder == "") {
			alert("Por favor llene todos los campos");
		}else
		{
			debugger
			this.event.dstartDate = this.event.startDate.substr(8,2) +"-"+ this.event.startDate.substr(5,2) +"-"+ this.event.startDate.substr(0,4);
			this.eventServices.createEventF(this.uid, this.event);
			// this.usersService.editUserF(this.user);
			this.navCtrl.pop();

		}
	}
}