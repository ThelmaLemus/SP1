import { Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class UsersService{
    items: Observable<any[]>;
    constructor(public afDB: AngularFireDatabase){

    }
    users = [
        {id: 1, nombre : 'ivan1', username: null, correo: 'iva1@gmail.com', password: null, password2: null, sexo: null, myDate: null, trabaja: null, estudia: null },
        {id: 2, nombre : 'ivan2', username: null, correo: 'iva2@gmail.com', password: null, password2: null, sexo: null, myDate: null, trabaja: null, estudia: null },
        {id: 3, nombre : 'ivan3', username: null, correo: 'iva3@gmail.com', password: null, password2: null, sexo: null, myDate: null, trabaja: null, estudia: null },
        {id: 4, nombre : 'ivan4', username: null, correo: 'iva4@gmail.com', password: null, password2: null, sexo: null, myDate: null, trabaja: null, estudia: null }

    ];

    public getUsers(){
        return this.users;
    }

    public getUser(id){
        return this.users.filter(function(e, i){return e.id == id})[0] || {id: null, nombre :null, username:null, correo:null, password:null, password2:null, sexo:null, myDate:null, trabaja:null, estudia:null};
    }

    public createUser(user){
        this.users.push(user);
    }

    public createUserF(user) {
        this.afDB.database.ref('usuarios/' + user.id).set(user);
    }

    public editUser(user) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                this.users[i] = user;
            }
        }
    }

    /**
     * deleteUser
     */
    public deleteUser(user) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                this.users.splice(i,1);
            }
        }
    }
}
