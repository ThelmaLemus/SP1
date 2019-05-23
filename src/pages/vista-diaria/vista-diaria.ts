import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServices } from '../../services/events.services';
import { CrearEventoPage } from '../crear-evento/crear-evento';
import { VistaMensualPage } from '../vista-mensual/vista-mensual';

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

  all_events = [];
  events1 = [];
  uid = null;
  eid = null;
  day = null;
  month = null;
  year = null;
  aux = null;
  theDate = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventServices: EventServices) {
    this.uid = navParams.get('uid');
    this.op = this.navParams.get('op');
    this.day = navParams.get('day');
    this.month = navParams.get('month');
    this.year = navParams.get('year');
    if (this.day == null || this.month == null || this.year == null) 
    {
      this.theDate = new Date();
      this.day = this.theDate.getDate();
      this.month = this.theDate.getMonth() + 1;
      this.year = this.theDate.getFullYear();
      this.month = this.month.toString();
      if (this.month.length == 1) this.month = "0"+ this.month;
    }else
    {
      this.month = this.month.toString();
      if (this.month.length == 1) {
        this.month = "0"+ this.month;
      }
      this.theDate = new Date(this.year , this.month , this.day);
    }
    this.aux = this.day+"-"+ this.month +"-"+ this.year; 
    this.theDate = this.theDate.toDateString();
    eventServices.getEvents(this.uid).valueChanges().subscribe(events => 
    {
      this.all_events = events;
      if (this.all_events.length>0) 
      {
        for (let i = 0; i < this.all_events.length; i++) {
          if (this.all_events[i].startDate == this.aux) this.events1.push(this.all_events[i]);   
        }
      }
    });  
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad VistaDiariaPage');
  }

  editarEvento(eid)
  {
    this.navCtrl.push(CrearEventoPage, { uid: this.uid ,eid: eid });
  }

  newEvent(uid)
  {
    this.navCtrl.push(CrearEventoPage, { uid: this.uid });
  }

  monthly_view()
  {
    this.navCtrl.push(VistaMensualPage, { uid: this.uid, op: 1 });
  }

}
