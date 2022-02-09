import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {

  @Input()
  public pizza!: Pizza;

  constructor() {
  }

  ngOnInit(): void {
  }
}
