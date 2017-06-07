import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() titre:string;
  @Input() description:string;
  @Input() id:string;

  constructor(){}

  ngOnInit() {
  }

}
