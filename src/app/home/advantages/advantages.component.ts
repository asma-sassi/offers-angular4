import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-advantages',
  templateUrl: 'advantages.component.html',
  styleUrls: ['advantages.component.css']
})
export class AdvantagesComponent implements OnInit {

  @Input() titre:string="";
  @Input() src:string="";
  @Input() liste:string[]=[];
  @Input() id:number=0;
  @Input() button:string="";
  @Input() color:string="";

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

}
