import {Component, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PIZZAS} from "../shared/pizzas";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public pizzas: Pizza[] = PIZZAS;

  public selectedPizza!: Pizza;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }
}
