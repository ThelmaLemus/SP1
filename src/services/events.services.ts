import { Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable()

export class EventServices{
    constructor(public afDB: AngularFireDatabase){

    }
    events = [];
    events1 =[];

    public getEvents(){
        return this.afDB.list('events/');
    }

    public getEvent(id){
        return this.events1.filter(function(e, i){return e.id == id})[0] || {id: null, nombre :null, username:null, correo:null, password:null, password2:null, sexo:null, myDate:null, trabaja:null, estudia:null};
        // return this.afDB.object('events/'+ id);
    }

    public getEventF(id) {
        return this.afDB.object('events/' + id);
    }

    public createEvent(event){
        this.events1.push(event);
    }

    public createEventF(event) {
        this.afDB.database.ref('events/' + event.id).set(event);
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
