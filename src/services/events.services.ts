import { Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()

export class EventServices{
    constructor(public afDB: AngularFireDatabase){

    }
    events = [];
    events1 =[];

    public getEvents(uid){
        return this.afDB.list('users/'+uid+'/events/');
    }

    public getEventF(uid, eid) {
        return this.afDB.object('users/'+uid+'/events/' + eid);
    }

    public createEventF(uid, event) {
        this.afDB.database.ref('users/'+uid+'/events/' + event.id).set(event);
    }

    //PARA SUGERENCIAS DE MES PASADO
    // public getEvent_TD(currentDate, event) {
    //     if(currentDate == event.dstartDate) return true;
    // }

    /**
     * deleteEvent
     */
    public deleteEvent(event) {
        this.afDB.database.ref('events/' + event.id).remove();
    }
}
