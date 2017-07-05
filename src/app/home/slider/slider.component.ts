import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css']
})
export class SliderComponent implements OnInit {
   //
   // @Input() id:number=0;
   // @Input() imageUrl:string="";
   // @Input() alt:string="";

  @Input() slides:any[];
  @Input() titleH2:string;
  @Input() titleH3:string;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  getBackground(url:string){
    return this.sanitizer.bypassSecurityTrustStyle('#000 url('+url+') center center / cover')
  }

}
