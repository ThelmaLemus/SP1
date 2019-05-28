import { Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()

export class EventServices{
    constructor(public afDB: AngularFireDatabase){

    }
    events = [];
    events1 =[];

    public getEvents(uid, startDate){
        return this.afDB.list('users/'+uid+'/events/'+ startDate + "/");
    }

    public getEventF(uid, startDate, eid) {
        return this.afDB.object('users/'+uid+'/events/' + startDate + "/" + eid);
    }

    public createEventF(uid, event) {
        this.afDB.database.ref('users/'+uid+'/events/' + event.dstartDate + "/" + event.id).set(event);
    }

    /**
     * deleteEvent
     */
    public deleteEvent(event) {
        this.afDB.database.ref('events/' + event.id).remove();
    }
}
