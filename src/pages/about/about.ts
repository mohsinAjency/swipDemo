import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
  }
  ngAfterViewInit() {
    this.slides.direction = 'vertical';
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }

}
