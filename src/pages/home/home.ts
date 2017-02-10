import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  panV:any;
  panEvent:string;
  constructor(public navCtrl: NavController) {
    console.log('DONE')
  }
  tapEvent(event){
    console.log (event.additionalEvent, event.angle)
    this.panV = event.angle;
    this.panEvent = event.additionalEvent
  }

}
