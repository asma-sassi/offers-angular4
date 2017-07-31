import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css']
})
export class DetailsComponent implements OnInit{

  // id: any;
  //
  // constructor(private router:Router,route: ActivatedRoute) {
  //   this.id = route.snapshot.params['id'];
  //   if(["0","1","2","3"].indexOf(this.id)== -1)
  //     this.router.navigate(['/']);
  // }

  id:number;
  product:any;

  constructor(private router:Router,route: ActivatedRoute,
              private homeService:HomeService) {
    this.id = parseInt(route.snapshot.params['id']);

    this.homeService.getProducts()
      .subscribe((data)=>{this.product = data.find(d=>d.id==this.id);});

    console.log(this.id, [0,1,2,3].indexOf(this.id)== -1);
    if([0,1,2,3].indexOf(this.id)== -1)
      this.router.navigate(['/']);
  }

  ngOnInit() {}

}
