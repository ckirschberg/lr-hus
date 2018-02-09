import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-plan',
  templateUrl: './house-plan.component.html',
  styleUrls: ['./house-plan.component.scss']
})
export class HousePlanComponent implements OnInit {
  panelOpenState: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
