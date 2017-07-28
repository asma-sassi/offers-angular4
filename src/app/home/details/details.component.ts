import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css']
})
export class DetailsComponent implements OnInit{

  id: any;

  constructor(private router:Router,route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    if(["0","1","2","3"].indexOf(this.id)== -1)
      this.router.navigate(['/']);
  }

  ngOnInit() { }

  onSubmit = function (user) {
    console.log(user);
  }

}
