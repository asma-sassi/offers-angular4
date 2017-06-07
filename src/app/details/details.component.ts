import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  id: any;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() { }

  onSubmit = function (user) {
    console.log(user);
  }

}
