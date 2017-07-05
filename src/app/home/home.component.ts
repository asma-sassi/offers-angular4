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
    titr:"Titre 1",
    src:"/assets/img/icon-tv.png",
    color:"#4dd8d8",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  },{
    id:1,
    titr:"Titre 2",
    src:"/assets/img/icon-mobile.png",
    color:"#ffe7b1",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  },{
    id:2,
    titr:"Titre 3",
    src:"/assets/img/icon-tv.png",
    color:"#a7ec91",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  },{
    id:3,
    titr:"Titre 4",
    src:"/assets/img/icon-mobile.png",
    color:"#dea6e2",
    liste:["Hanc regionem",
      "Hoc inmaturo interitu",
      "Principium autem",
      "Restabat ut Caesar"],
    button:"View this advantage"
  }];

  slides = [{
    id:0,
    imageUrl:"/assets/img/la.jpg",
    alt:"First slide"
  },{
    id:1,
    imageUrl:"/assets/img/ny.jpg",
    alt:"Second slide"
  },{
    id:2,
    imageUrl:"/assets/img/chicago.jpg",
    alt:"Third slide"
  }];

  titleH2 = "Welcome to <strong>Seating Plan</strong>";

  titleH3 = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>";

}
