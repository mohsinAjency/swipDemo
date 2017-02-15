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
  items: any;
  color: string;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = 'red';
    this.items = [
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'},
      {id:1,name:"rrrr",image:'assets/card-1.png'},
      {id:1,name:"rrrr",image:'assets/card-2.png'},
      {id:1,name:"rrrr",image:'assets/rocket.jpg'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfiniteScrollPage');
  }
  ngAfterViewInit() {
    // this.slides.effect = 'cube'

  }
}
