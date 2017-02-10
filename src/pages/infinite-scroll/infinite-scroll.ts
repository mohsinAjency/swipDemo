import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams , Slides} from 'ionic-angular';

/*
  Generated class for the InfiniteScroll page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html'
})
export class InfiniteScrollPage {

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfiniteScrollPage');
  }
  ngAfterViewInit() {
    this.slides.freeMode = true
    // this.slides.parallax = true;
    this.slides.direction = 'vertical';
    // this.slides.effect = 'cube'

  }
}
