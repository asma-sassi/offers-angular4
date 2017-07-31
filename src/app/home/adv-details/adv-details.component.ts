import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-adv-details',
  templateUrl: 'adv-details.component.html',
  styleUrls: ['adv-details.component.css']
})
export class AdvDetailsComponent implements OnInit {

  id:number;
  advantage:any;

  constructor(private router:Router,route: ActivatedRoute,
              private homeService:HomeService) {
    this.id = parseInt(route.snapshot.params['id']);

    this.homeService.getAdventages()
      .subscribe((data)=>{this.advantage = data.find(d=>d.id==this.id);});

    console.log(this.id, [0,1,2,3].indexOf(this.id)== -1);
    if([0,1,2,3].indexOf(this.id)== -1)
      this.router.navigate(['/']);
  }

  ngOnInit() { }
}
