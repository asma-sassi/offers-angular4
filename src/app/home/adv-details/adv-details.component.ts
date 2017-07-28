import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-adv-details',
  templateUrl: 'adv-details.component.html',
  styleUrls: ['adv-details.component.css']
})
export class AdvDetailsComponent implements OnInit {

  id:number;

  constructor(private router:Router,route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    if([0,1,2,3].indexOf(this.id)== -1)
      this.router.navigate(['/']);
  }

  ngOnInit() { }
}
