import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServices } from '../../services/events.services';
import { CrearEventoPage } from '../crear-evento/crear-evento';

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
  uid = null;
  eid = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public eventServices: EventServices) {
    this.uid = navParams.get('uid');
    eventServices.getEvents().valueChanges()
      .subscribe(events => {
        this.events = events;
      });
      // debugger
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaDiariaPage');
  }

  editarEvento(eid) {
    this.navCtrl.push(CrearEventoPage, { uid: this.uid ,eid: eid });
  }

  newEvent() {
    this.navCtrl.push(CrearEventoPage);
  }


}
