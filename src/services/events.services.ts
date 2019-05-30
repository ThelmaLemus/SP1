import { Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from 'ionic-angular';
@Injectable()

export class EventServices{
    constructor(public afDB: AngularFireDatabase, public alertCtrl: AlertController){

    }
    events = [];
    events1 =[];
    repeat = null;
    eventn = null;

    public getEvents(uid){
        return this.afDB.list('users/'+uid+'/events/');
    }

    public getEventF(uid, eid) {
        return this.afDB.object('users/'+uid+'/events/' + eid);
    }

    public createEventF(uid, event) {
        this.repeat = event.repeat;
        switch (this.repeat) {
            case "no":
                this.afDB.database.ref('users/'+uid+'/events/' + event.id).set(event);
                break;
            case "dias":
                debugger
                event.endDate ="2100-12-31"+ event.endDate.substr(10,10);
                this.afDB.database.ref('users/'+uid+'/events/' + event.id).set(event);
                break;
            case "semanas":
                
                break;
            case "meses":
            
                break;
            case "años":
            
                break;
        
        }
    }

    public getEvent_TD(currentDate, event)
    {
        if(currentDate == event.dstartDate)return true;
    }
    
    /**
     * deleteEvent
     */
    public deleteEvent(event) {
        this.afDB.database.ref('events/' + event.id).remove();
    }

    public dalert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title:title,
      subTitle: subtitle,
      buttons: ['Ok']
    });
    alert.present();
  }
}
