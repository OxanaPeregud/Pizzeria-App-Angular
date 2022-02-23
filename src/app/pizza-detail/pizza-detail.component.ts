import {Component, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {

  public pizza!: Pizza;

  constructor(private pizzaService: PizzaService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getPizzaDetails();
  }

  public getPizzaDetails(): void {
    let id = this.route.snapshot.params['id'];
    this.pizza = this.pizzaService.getPizza(id);
  }

  public goBack(): void {
    this.location.back();
  }
}
