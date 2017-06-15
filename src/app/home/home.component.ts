import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'home works!';

  products = [{
    id:"0",
    titre:"titre1",
    desc:"desc1",
    rating: "bronze"

  },{
    id:"1",
    titre:"titre2",
    desc:"desc2",
    rating: "silver"
  },{
    id:"2",
    titre:"titre3",
    desc:"desc3",
    rating:"gold"
  },{
    id:"3",
    titre:"titre4",
    desc:"desc4",
    rating:"silver"
  }];

  advantages = [{
    id:0,
    titr:"titre1",
    src:"/assets/img/icon-tv.png",
    liste:["test1","test2","test3"]
  },{
    id:1,
    titr:"titre2",
    src:"/assets/img/icon-mobile.png",
    liste:["test1","test2","test3"]
  },{
    id:2,
    titr:"titre3",
    src:"/assets/img/icon-pc.png",
    liste:["test1","test2","test3"]
  },{
    id:3,
    titr:"titre4",
    src:"/assets/img/icon-tv.png",
    liste:["test1","test2","test3"]
  }];

}
