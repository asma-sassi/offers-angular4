import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() titre: string;
  @Input() description: string;
  @Input() id: string;
  @Input() rating: string;

  constructor() {
  }

  ngOnInit() {

  }

}
