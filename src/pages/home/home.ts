import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  panV:any;
  panEvent:string;

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    console.log('DONE')
  }
  ngAfterViewInit() {
    this.slides.direction = 'vertical';
    // this.slides.effect = 'coverflow'

  }

}
