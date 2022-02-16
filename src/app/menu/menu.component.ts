import {Component, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public pizzas!: Pizza[];

  public selectedPizza!: Pizza;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas();
  }

  public onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }
}
