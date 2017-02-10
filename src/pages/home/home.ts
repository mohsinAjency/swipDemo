import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    console.log('DONE')
  }
  ngAfterViewInit() {
    // this.slides.freeMode = true
    this.slides.parallax = true;
    this.slides.direction = 'vertical';
    // this.slides.effect = 'cube'

  }

}
