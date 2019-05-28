import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
//import { CrearEventoPage } from '../pages/crear-evento/crear-evento';
import { VistaDiariaPage } from '../pages/vista-diaria/vista-diaria';

import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  // rootPage:any = CrearEventoPage;
  rootPage:any = VistaDiariaPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private fcm: FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.fcm.getToken().then(
        (token: string) => {
          console.log("Este es el token de este dispositivo" + token);
        }
      ).catch(error => {
        console.log(error);
      });
      this.fcm.onTokenRefresh().subscribe((token: string) => {
        console.log("Actializacion token " + token);
      });

      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped) {
          //cuando la aplicación está en segundo plano
          console.log("Estamos en segundo plano" + JSON.stringify(data));
        } else {
          //cuando la aplicación está en primer plano
          console.log("estamos en primer plano" + JSON.stringify(data));
        }
      }, error =>{
        console.log("error error" + error);
      });
    });
  }
}

