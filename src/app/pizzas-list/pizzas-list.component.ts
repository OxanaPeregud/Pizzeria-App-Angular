import {Component, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent implements OnInit {

  public displayedColumns: string[] = ['pizza', 'price'];
  public pizzasList: Pizza[] = [];

  constructor(public dialogRef: MatDialogRef<any>,
              private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzasList = data;
    });
  }
}
