import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  @Input() titre:string="";
  @Input() src:string="";
  @Input() liste:string[]=[];
  @Input() id:number=0;

  constructor() { }

  ngOnInit() {
  }

}
