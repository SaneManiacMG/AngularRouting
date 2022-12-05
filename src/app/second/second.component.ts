import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  name: any;

  constructor (private route: ActivatedRoute) { }

  ngOnInit () { 
    this.route.queryParams.subscribe(params => {
      this.name = params ['name'];
    })
  }
}
