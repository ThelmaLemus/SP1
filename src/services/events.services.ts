import { Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()

export class EventServices{
    constructor(public afDB: AngularFireDatabase){

    }
    events = [];
    events1 =[];

    public getEvents(uid){
        // console.log('aqui');

        return this.afDB.list('users/'+uid+'/events/');
        // return this.afDB.list('events/');
    }

    public getEventF(uid, eid) {
        return this.afDB.object('users/'+uid+'/events/' + eid);
    }

    public createEventF(uid, event) {
        this.afDB.database.ref('users/'+uid+'/events/' + event.id).set(event);
    }

    public editEvent(event) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i].id == event.id) {
                this.events[i] = event;
            }
        }
    }

    /**
     * ecitEventF 
     */
    public editEventF(event) {
        this.afDB.database.ref('events/' + event.id).set(event);
    }

    /**
     * deleteEvent
     */
    public deleteEvent(event) {
        this.afDB.database.ref('events/' + event.id).remove();
    }
}
