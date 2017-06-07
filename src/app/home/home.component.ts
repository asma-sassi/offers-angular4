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
    titre:"titre1",
    desc:"desc1",
    id:"0"
  },{
    titre:"titre2",
    desc:"desc2",
    id:"1"
  },{
    titre:"titre3",
    desc:"desc3",
    id:"2"
  }];

}
