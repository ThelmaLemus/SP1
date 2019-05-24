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
  thing1 = null;
  thing2 = null;
  op = null;
  events1 = [];
  uid = null;
  eid = null;
  day = null;
  month = null;
  year = null;
  aux = null;
  theDate = null;
  fday = null;
  fmonth = null;
  fyear =null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventServices: EventServices) {
    this.uid = navParams.get('uid');
    this.op = navParams.get('op');
    this.day = navParams.get('day') ;
    this.month = navParams.get('month') ;
    this.year = navParams.get('year');
    this.validations();
  }

  // public ionViewWillEnter() {
  //   debugger
  //   this.uid = this.navParams.get('uid');
  //   this.op = this.navParams.get('op')|| null;
  //   this.day =  this.navParams.get('day')|| null;
  //   this.month =  this.navParams.get('month')|| null;
  //   this.year = this.navParams.get('year')|| null;
  //   console.log(this.day);
  //   this.validations();
  //   this.eventServices.getEvents(this.uid).valueChanges().subscribe(events => 
  //     {
  //       this.all_events = events;
  //       if (this.all_events.length>0) 
  //       {
  //         for (let i = 0; i < this.all_events.length; i++) {
  //           if (this.all_events[i].startDate == this.aux) this.events1.push(this.all_events[i]);   
  //         }
  //       }
  //     });
  // } 
  
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
    if (this.op == 1)
    {
      this.navCtrl.pop();
    }else
    {
      this.navCtrl.push(VistaMensualPage, { uid: this.uid });
    }
  }

  private validations() {
    
    if (this.day == null || this.month == null || this.year == null) 
    {
      this.theDate = new Date();
      this.day = this.theDate.getDate();
      this.month = this.theDate.getMonth() + 1;
      this.year = this.theDate.getFullYear();
      this.month = this.month.toString();
      this.day = this.day.toString();
      if (this.month.length == 1) this.month = "0"+ this.month;
      if (this.day.length == 1) this.day = "0"+ this.day;
    }else
    {
      this.month = this.month.toString();
      this.day = this.day.toString();
      if (this.month.length == 1) this.month = "0"+ this.month;
      if (this.day.length == 1) this.day = "0"+ this.day;
      
      this.theDate = new Date(this.year , this.month , this.day);
    }
    this.aux = this.day+"-"+ this.month +"-"+ this.year; 
    this.theDate = this.theDate.toDateString();
    this.eventServices.getEvents(this.uid).valueChanges().subscribe(events => 
    {
      this.all_events = events;
      if (this.all_events.length>0) 
      {
        for (let i = 0; i < this.all_events.length; i++) {
          
          this.fday = this.all_events[i].startDate.substr(0,2);
          this.fmonth = this.all_events[i].startDate.substr(3,2);
          console.log(this.all_events[i].startDate.substr(8,2));
          
          if (this.all_events[i].startDate == this.aux)
          {
            this.events1.push(this.all_events[i]);   
          } 
        }
      }
    });
  }

  
}
