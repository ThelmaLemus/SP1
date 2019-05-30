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
  rep = null;
  events1 = [];
  uid = null;
  eid = null;
  day = null;
  month = null;
  montha = null;
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
  dateMesAnterior = null;

  diaDiaAnterior = null;
  mesDiaAnterior = null;
  añoDiaAnterior = null;
  dateDiaAnterior = null;

  diaDiaAnterior2 = null;
  mesDiaAnterior2 = null;
  añoDiaAnterior2 = null;
  dateDiaAnterior2 = null;

  auxMesAnterior = null;
  auxDiaAnterior = null;
  auxDiaAnterior2 = null;

  suggest = [];
  suggest2 = [];
  eventos_ayer = [];
  eventos_anteayer = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventServices: EventServices) {
    // debugger
    this.uid = navParams.get('uid');
    this.op = navParams.get('op');
    this.day = navParams.get('day') ;
    this.month = navParams.get('month') ;
    this.year = navParams.get('year');
    this.validations();
    this.sugerencias();
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  
  public ionViewWillEnter() 
  {
    // debugger
    this.rep = this.navParams.get('rep');
    if (this.rep != undefined)
    {
      this.events1 = [];
      this.validations();
    } 
  }

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
      // debugger
      this.theDate2 = new Date();
      this.day = this.theDate2.getDate();
      this.month = this.theDate2.getMonth() + 1;
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
      this.montha = this.month;
      this.month = 1+this.month;
      this.month = this.month.toString();
      this.day = this.day.toString();
      if (this.month.length == 1) this.month = "0"+ this.month;
      if (this.day.length == 1) this.day = "0"+ this.day;
      
      this.theDate = new Date(this.year , this.montha , this.day);
    }
    this.aux = this.year+"-"+ this.month +"-"+ this.day; 
    this.theDate = this.theDate.toDateString();
    // debugger
    this.eventServices.getEvents(this.uid).valueChanges().subscribe(events => 
    {
      this.all_events = events;
      if (this.all_events.length>0) 
      {
        for (let i = 0; i < this.all_events.length; i++) 
        {
          debugger
          isValid =  this.valid_range(this.all_events[i].startDate, this.aux, this.all_events[i].endDate);
          if (isValid)this.events1.push(this.all_events[i]);   
          // debugger
        }
      }
    });
  }

  private sugerencias() {
    if (this.day == null || this.month == null || this.year == null) {
      // debugger
      this.theDate = new Date();
      this.day = this.theDate.getDate();
      this.month = this.theDate.getMonth() + 1;
      this.year = this.theDate.getFullYear();
    }
    else {
      this.month = this.month//.toString();
      this.day = this.day//.toString();
    }

    //PARA MES ANTERIOR
    if (this.month == 1) {
      this.diaMesAnterior = this.day;
      this.mesMesAnterior = 12;
      this.añoMesAnterior = this.year - 1;
    }
    else {
      this.diaMesAnterior = this.day;
      this.mesMesAnterior = this.month - 1;
      this.añoMesAnterior = this.year;
    }

    //PARA DIA ANTERIOR
    if(this.day == 1)
    {
      if(this.month == 1)
      {
        this.diaDiaAnterior = 31;
        this.mesDiaAnterior = 12;
        this.añoDiaAnterior = this.year - 1;
      }
      else if((this.month == 5)||(this.month == 7)||(this.month == 8)||(this.month == 10)||(this.month == 12))
      {
        this.diaDiaAnterior = 30;
        this.mesDiaAnterior = this.month - 1;
        this.añoDiaAnterior = this.year;
      }
      else if(this.month == 3)
      {
        this.diaDiaAnterior = 28;
        this.mesDiaAnterior = this.month - 1;
        this.añoDiaAnterior = this.year;
      }
      else
      {
        this.diaDiaAnterior = 31;
        this.mesDiaAnterior = this.month - 1;
        this.añoDiaAnterior = this.year;
      }
    }
    else
    {
      this.diaDiaAnterior = this.day - 1;
      this.mesDiaAnterior = this.month;
      this.añoDiaAnterior = this.year;
    }

    //PARA DOS DIAS ANTERIORES
    if(this.day == 1)
    {
      if(this.month == 1)
      {
        this.diaDiaAnterior2 = 30;
        this.mesDiaAnterior2 = 12;
        this.añoDiaAnterior2 = this.year - 1;
      }
      else if((this.month == 5)||(this.month == 7)||(this.month == 8)||(this.month == 10)||(this.month == 12))
      {
        this.diaDiaAnterior2 = 29;
        this.mesDiaAnterior2 = this.month - 1;
        this.añoDiaAnterior2 = this.year;
      }
      else if(this.month == 3)
      {
        this.diaDiaAnterior2 = 27;
        this.mesDiaAnterior2 = this.month - 1;
        this.añoDiaAnterior2 = this.year;
      }
      else
      {
        this.diaDiaAnterior2 = 30;
        this.mesDiaAnterior2 = this.month - 1;
        this.añoDiaAnterior2 = this.year;
      }
    }
    else if(this.day == 2)
    {
      if(this.month == 1)
      {
        this.diaDiaAnterior2 = 31;
        this.mesDiaAnterior2 = 12;
        this.añoDiaAnterior2 = this.year - 1;
      }
      else if((this.month == 5)||(this.month == 7)||(this.month == 8)||(this.month == 10)||(this.month == 12))
      {
        this.diaDiaAnterior2 = 30;
        this.mesDiaAnterior2 = this.month - 1;
        this.añoDiaAnterior2 = this.year;
      }
      else if(this.month == 3)
      {
        this.diaDiaAnterior2 = 28;
        this.mesDiaAnterior2 = this.month - 1;
        this.añoDiaAnterior2 = this.year;
      }
      else
      {
        this.diaDiaAnterior2 = 31;
        this.mesDiaAnterior2 = this.month - 1;
        this.añoDiaAnterior2 = this.year;
      }
    }
    else
    {
      this.diaDiaAnterior2 = this.day - 2;
      this.mesDiaAnterior2 = this.month;
      this.añoDiaAnterior2 = this.year;
    }

    //FECHA MES ANTERIOR
    this.diaMesAnterior = this.diaMesAnterior.toString();
    this.mesMesAnterior = this.mesMesAnterior.toString();
    if (this.mesMesAnterior.length == 1) this.mesMesAnterior = "0" + this.mesMesAnterior;
    if (this.diaMesAnterior.length == 1) this.diaMesAnterior = "0" + this.diaMesAnterior;
    this.dateMesAnterior = new Date(this.añoMesAnterior, this.mesMesAnterior, this.diaMesAnterior);
    this.auxMesAnterior = this.diaMesAnterior + "-" + this.mesMesAnterior + "-" + this.añoMesAnterior;

    //FECHA DIA ANTERIOR
    this.diaDiaAnterior = this.diaDiaAnterior.toString();
    this.mesDiaAnterior = this.mesDiaAnterior.toString();
    if (this.mesDiaAnterior.length == 1) this.mesDiaAnterior = "0"+ this.mesDiaAnterior;
    if (this.diaDiaAnterior.length == 1) this.diaDiaAnterior = "0"+ this.diaDiaAnterior;
    this.dateDiaAnterior = new Date(this.añoDiaAnterior, this.mesDiaAnterior, this.diaDiaAnterior);
    this.auxDiaAnterior = this.diaDiaAnterior+"-"+ this.mesDiaAnterior +"-"+ this.añoDiaAnterior;

    //FECHA DIA ANTERIOR 2
    this.diaDiaAnterior2 = this.diaDiaAnterior2.toString();
    this.mesDiaAnterior2 = this.mesDiaAnterior2.toString();
    if (this.mesDiaAnterior2.length == 1) this.mesDiaAnterior2 = "0"+ this.mesDiaAnterior2;
    if (this.diaDiaAnterior2.length == 1) this.diaDiaAnterior2 = "0"+ this.diaDiaAnterior2;
    this.dateDiaAnterior2 = new Date(this.añoDiaAnterior, this.mesDiaAnterior, this.diaDiaAnterior2);
    this.auxDiaAnterior2 = this.diaDiaAnterior2+"-"+ this.mesDiaAnterior2 +"-"+ this.añoDiaAnterior2;

    this.eventServices.getEvents(this.uid).valueChanges().subscribe(events => {
      this.all_events = events;
      if (this.all_events.length > 0) {
        for (let i = 0; i < this.all_events.length; i++) {
          if (this.eventServices.getEvent_TD(this.auxDiaAnterior, this.all_events[i]))
          {
              this.eventos_ayer.push(this.all_events[i]);
          }
          if(this.eventServices.getEvent_TD(this.auxDiaAnterior2, this.all_events[i]))
          {
            this.eventos_anteayer.push(this.all_events[i]);
          }
          if (this.eventServices.getEvent_TD(this.auxMesAnterior, this.all_events[i]))
            this.suggest.push(this.all_events[i]);
          // debugger
          // if(this.eventServices.getEvent_TD(this.auxDiaAnterior2, this.suggest[i]))
          //   this.suggest2.push(this.suggest[i]);
        }
      }
      for(let i = 0; i < this.eventos_ayer.length; i++)
      {
        for(let j = 0; j < this.eventos_anteayer.length; j++)
        {
          if(this.eventos_ayer[i].title == this.eventos_anteayer[j])
          this.suggest.push(this.all_events[i]);
        }
      }
    });
  }

  private valid_range(startDate, aux, endDate)
  {
    //get the day, month and year from each date
    // debugger
    this.sday = startDate.substr(8,2);
    this.smonth = startDate.substr(5, 2);
    this.syear = startDate.substr(0,4);

    this.fday = endDate.substr(8,2);
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
    if (startDate.substr(0,10) == aux)
    {
      return true;
    } 
    else if (this.sday <= this.aday && this.aday <= this.fday) 
      if (this.smonth <= this.amonth && this.amonth <= this.fmonth) 
        if (this.syear <= this.ayear && this.ayear <= this.fyear) return true;
    
  }
}
