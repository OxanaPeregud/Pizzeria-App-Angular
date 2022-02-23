import {Component, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public firstPromotion!: Pizza;
  public secondPromotion!: Pizza;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.displayFeaturedPizzas();
  }

  private displayFeaturedPizzas(): void {
    let pizzas: Pizza[] = this.pizzaService.getPizzas();
    let featuredPizzas: Pizza[] = this.pizzaService.getFeaturedPizzas();
    if (featuredPizzas.length >= 2) {
      this.firstPromotion = featuredPizzas[0];
      this.secondPromotion = featuredPizzas[1];
    } else if (featuredPizzas.length == 1) {
      this.firstPromotion = featuredPizzas[0];
      this.secondPromotion = pizzas[0];
    } else {
      this.firstPromotion = pizzas[0];
      this.secondPromotion = pizzas[1];
    }
  }
}
