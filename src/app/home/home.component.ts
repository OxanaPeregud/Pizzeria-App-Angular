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
  private pizzas!: Pizza[];
  private featuredPizzas!: Pizza[];

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.setPromotionPizzas().then(() => {
      this.displayFeaturedPizzas();
    });
  }

  private async setPromotionPizzas() {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
    this.pizzaService.getFeaturedPizzas()
      .subscribe(featuredPizzas => this.featuredPizzas = featuredPizzas);
  }

  private displayFeaturedPizzas(): void {
    if (this.featuredPizzas.length >= 2) {
      this.firstPromotion = this.featuredPizzas[0];
      this.secondPromotion = this.featuredPizzas[1];
    } else if (this.featuredPizzas.length == 1) {
      this.firstPromotion = this.featuredPizzas[0];
      this.secondPromotion = this.pizzas[0];
    } else {
      this.firstPromotion = this.pizzas[0];
      this.secondPromotion = this.pizzas[1];
    }
  }
}
