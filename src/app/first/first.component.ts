import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name: any;

  constructor (private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.queryParams.subscribe(params => {
      this.name = params ['name'];
    })
  }
}
