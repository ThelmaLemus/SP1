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
  op = null;
  events1 = [];
  uid = null;
  eid = null;
  day = null;
  month = null;
  year = null;
  aux = null;
  aux2 = null;
  theDate = null;
  theDate2 = null;
  sday = null;
  smonth = null;
  syear = null;
  aday = null;
  amonth = null;
  ayear = null;
  fday = null;
  fmonth = null;
  fyear = null;

  //PARA SUGERENCIAS
  diaMesAnterior = null;
  mesMesAnterior = null;
  añoMesAnterior = null;

  diaDiaAnterior = null;
  mesDiaAnterior = null;
  añoDiaAnterior = null;

  diaDiaAnterior2 = null;
  mesDiaAnterior2 = null;
  añoDiaAnterior2 = null;

  auxMesAnterior = null;
  auxDiaAnterior = null;
  auxDiaAnterior2 = null;

  eventosMesAnterior = [];
  eventosDiaAnterior = [];
  eventosDiaAnterior2 = [];

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

  editarEvento(eid, dstartDate)
  {
    this.navCtrl.push(CrearEventoPage, { uid: this.uid ,eid: eid, dstartDate: dstartDate });
  }

  newEvent(uid)
  {
    if (this.day == null || this.month == null || this.year == null) {
      this.theDate2 = new Date();
      this.day = this.theDate2.getDate();
      this.day = this.theDate2.getDate();
      this.month = this.theDate2.getMonth() + 1;
      this.month = this.theDate2.getMonth() + 1;
      this.year = this.theDate2.getFullYear();
      this.year = this.theDate2.getFullYear();
      this.month = this.month.toString();
      this.day = this.day.toString();
      if (this.month.length == 1) this.month = "0" + this.month;
      if (this.day.length == 1) this.day = "0" + this.day;
    } else {
      this.month = this.month.toString();
      this.day = this.day.toString();
      if (this.month.length == 1) this.month = "0" + this.month;
      if (this.day.length == 1) this.day = "0" + this.day;
      this.theDate2 = new Date(this.year, this.month, this.day);
    }
    this.aux = this.year + "-" + this.month + "-" + this.day;
    this.navCtrl.push(CrearEventoPage, { uid: this.uid, date: this.aux });
  }

  monthly_view()
  {
    if (this.op == 1){
      this.navCtrl.pop();
    }else
    {
      this.navCtrl.push(VistaMensualPage, { uid: this.uid });
    }
  }

  private validations()
  { 
    var isValid = null;   
    if (this.day == null || this.month == null || this.year == null) 
    {
      // debugger
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
    this.aux = this.year+"-"+ this.month +"-"+ this.day; 
    this.aux2 = this.day+"-"+ this.month +"-"+ this.year; 
    this.theDate = this.theDate.toDateString();
    this.eventServices.getEvents(this.uid, this.aux2).valueChanges().subscribe(events => 
    {
      this.events1 = events;
    });
  }

  private sugerencias()
  {
    if (this.day == null || this.month == null || this.year == null) 
    {
      // debugger
      this.theDate = new Date();
      this.day = this.theDate.getDate();
      this.month = this.theDate.getMonth() + 1;
      this.year = this.theDate.getFullYear();
    }
    else
    {
      this.month = this.month//.toString();
      this.day = this.day//.toString();
    }

    //PARA MES ANTERIOR
    if(this.month == 1)
    {
      var diaMesAnterior = this.day;
      var mesMesAnterior = 12;
      var añoMesAnterior = this.year - 1;
    }
    else
    {
      var diaMesAnterior = this.day;
      var mesMesAnterior = this.month - 1;
      var añoMesAnterior = this.year;
    }

    //PARA DIA ANTERIOR
    if(this.day == 1)
    {
      if(this.month == 1)
      {
        var diaDiaAnterior = 31;
        var mesDiaAnterior = 12;
        var añoDiaAnterior = this.year - 1;
      }
      else if((this.month == 5)||(this.month == 7)||(this.month == 8)||(this.month == 10)||(this.month == 12))
      {
        var diaDiaAnterior = 30;
        var mesDiaAnterior = this.month - 1;
        var añoDiaAnterior = this.year;
      }
      else if(this.month == 3)
      {
        var diaDiaAnterior = 28;
        var mesDiaAnterior = this.month - 1;
        var añoDiaAnterior = this.year;
      }
      else
      {
        var diaDiaAnterior = 31;
        var mesDiaAnterior = this.month - 1;
        var añoDiaAnterior = this.year;
      }
    }
    else
    {
      var diaDiaAnterior = this.day - 1;
      var mesDiaAnterior = this.month;
      var añoDiaAnterior = this.year;
    }

    //PARA DOS DIAS ANTERIORES
    if(this.day == 1)
    {
      if(this.month == 1)
      {
        var diaDiaAnterior2 = 30;
        var mesDiaAnterior2 = 12;
        var añoDiaAnterior2 = this.year - 1;
      }
      else if((this.month == 5)||(this.month == 7)||(this.month == 8)||(this.month == 10)||(this.month == 12))
      {
        var diaDiaAnterior2 = 29;
        var mesDiaAnterior2 = this.month - 1;
        var añoDiaAnterior2 = this.year;
      }
      else if(this.month == 3)
      {
        var diaDiaAnterior2 = 27;
        var mesDiaAnterior2 = this.month - 1;
        var añoDiaAnterior2 = this.year;
      }
      else
      {
        var diaDiaAnterior2 = 30;
        var mesDiaAnterior2 = this.month - 1;
        var añoDiaAnterior2 = this.year;
      }
    }
    else if(this.day == 2)
    {
      if(this.month == 1)
      {
        var diaDiaAnterior2 = 31;
        var mesDiaAnterior2 = 12;
        var añoDiaAnterior2 = this.year - 1;
      }
      else if((this.month == 5)||(this.month == 7)||(this.month == 8)||(this.month == 10)||(this.month == 12))
      {
        var diaDiaAnterior2 = 30;
        var mesDiaAnterior2 = this.month - 1;
        var añoDiaAnterior2 = this.year;
      }
      else if(this.month == 3)
      {
        var diaDiaAnterior2 = 28;
        var mesDiaAnterior2 = this.month - 1;
        var añoDiaAnterior2 = this.year;
      }
      else
      {
        var diaDiaAnterior2 = 31;
        var mesDiaAnterior2 = this.month - 1;
        var añoDiaAnterior2 = this.year;
      }
    }
    else
    {
      var diaDiaAnterior2 = this.day - 2;
      var mesDiaAnterior2 = this.month;
      var añoDiaAnterior2 = this.year;
    }
    
    //FECHA NORMAL
    this.day = this.day.toString();
    this.month = this.month.toString();
    if (this.month.length == 1) this.month = "0"+ this.month;
    if (this.day.length == 1) this.day = "0"+ this.day;
    this.theDate = new Date(this.year , this.month , this.day);
    this.aux = this.year+"-"+ this.month +"-"+ this.day; 
    this.aux2 = this.day+"-"+ this.month +"-"+ this.year;
    this.theDate = this.theDate.toDateString();
    this.eventServices.getEvents(this.uid, this.aux2).valueChanges().subscribe(events => 
    {
      this.events2 = events;
    });
    
    //FECHA MES ANTERIOR
    this.diaMesAnterior = this.diaMesAnterior.toString();
    this.mesMesAnterior = this.mesMesAnterior.toString();
    if (this.mesMesAnterior.length == 1) this.mesMesAnterior = "0"+ this.mesMesAnterior;
    if (this.diaMesAnterior.length == 1) this.diaMesAnterior = "0"+ this.diaMesAnterior;
    var dateMesAnterior = new Date(this.añoMesAnterior, this.mesMesAnterior, this.diaMesAnterior);
    this.auxMesAnterior = this.diaMesAnterior+"-"+ this.mesMesAnterior +"-"+ this.añoMesAnterior;
    this.eventServices.getEvents(this.uid, this.auxMesAnterior).valueChanges().subscribe(events => 
      {
        this.eventosMesAnterior = events;
      });
    
    //FECHA DIA ANTERIOR
    this.diaDiaAnterior = this.diaDiaAnterior.toString();
    this.mesDiaAnterior = this.mesDiaAnterior.toString();
    if (this.mesDiaAnterior.length == 1) this.mesDiaAnterior = "0"+ this.mesDiaAnterior;
    if (this.diaDiaAnterior.length == 1) this.diaDiaAnterior = "0"+ this.diaDiaAnterior;
    var dateDiaAnterior = new Date(this.añoDiaAnterior, this.mesDiaAnterior, this.diaDiaAnterior);
    this.auxDiaAnterior = this.diaDiaAnterior+"-"+ this.mesDiaAnterior +"-"+ this.añoDiaAnterior;
    this.eventServices.getEvents(this.uid, this.auxDiaAnterior).valueChanges().subscribe(events => 
      {
        this.eventosDiaAnterior = events;
      });
    
    //FECHA DIA ANTERIOR 2
    this.diaDiaAnterior2 = this.diaDiaAnterior2.toString();
    this.mesDiaAnterior2 = this.mesDiaAnterior2.toString();
    if (this.mesDiaAnterior2.length == 1) this.mesDiaAnterior2 = "0"+ this.mesDiaAnterior2;
    if (this.diaDiaAnterior2.length == 1) this.diaDiaAnterior2 = "0"+ this.diaDiaAnterior2;
    var dateDiaAnterior2 = new Date(this.añoDiaAnterior, this.mesDiaAnterior, this.diaDiaAnterior2);
    this.auxDiaAnterior2 = this.diaDiaAnterior2+"-"+ this.mesDiaAnterior2 +"-"+ this.añoDiaAnterior2;
    this.eventServices.getEvents(this.uid, this.auxDiaAnterior2).valueChanges().subscribe(events => 
      {
        this.eventosDiaAnterior2 = events;
      });

  }

  private valid_range(startDate, aux, endDate)
  {
    //get the day, month and year from each date
    // debugger
    this.sday = startDate.substr(8,2);
    this.smonth = startDate.substr(5, 2);
    this.syear = startDate.substr(0,4);

    this.fday = endDate.substr(8,9);
    this.fmonth = endDate.substr(5, 2);
    this.fyear = endDate.substr(0,4);

    this.aday = aux.substr(8,2);
    this.amonth = aux.substr(5, 2);
    this.ayear = aux.substr(0,4);

    //parsing each string date to integer
    this.sday = parseInt(this.sday, 10);
    this.smonth = parseInt(this.smonth, 10);
    this.syear = parseInt(this.syear, 10);

    this.fday = parseInt(this.fday, 10);
    this.fmonth = parseInt(this.fmonth, 10);
    this.fyear = parseInt(this.fyear, 10);

    this.aday = parseInt(this.aday, 10);
    this.amonth = parseInt(this.amonth, 10);
    this.ayear = parseInt(this.ayear, 10);
    // debugger
    if (startDate == aux)
    {
      return true;
    } 
    else if (this.sday <= this.aday && this.aday <= this.fday) 
      if (this.smonth <= this.amonth && this.amonth <= this.fmonth) 
        if (this.syear <= this.ayear && this.ayear <= this.fyear) return true;
    
  }
}
