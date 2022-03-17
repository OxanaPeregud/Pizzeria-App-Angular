import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {HttpService} from "../services/http.service";
import {Pizza} from "../shared/pizza";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public displayedColumns: string[] = ['pizza', 'price', 'count', 'sum', 'delete'];
  public totalSum!: string;

  constructor(public pizzaService: PizzaService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<OrderComponent>,
              private router: Router,
              private http: HttpService) {
  }

  ngOnInit(): void {
    this.calculateTotalOrderSum();
  }

  public displayedPizzaList(): Pizza[] {
    return [...new Set(this.pizzaService.orderedPizzas)]
      .sort((a, b) => (
        a.name.localeCompare(b.name))
      );
  }

  public calculatePizzaSum(chosenPizza: Pizza): string {
    return (this.countPizzas(chosenPizza) * Number(chosenPizza.price))
      .toFixed(2);
  }

  public calculateTotalOrderSum(): void {
    this.totalSum = this.pizzaService.orderedPizzas
      .map((pizza => (Number(pizza.price))))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  }

  public removeFromOrder(deletedPizza: Pizza): void {
    this.pizzaService.orderedPizzas = this.pizzaService.orderedPizzas.filter(pizza => pizza !== deletedPizza);
    this.calculateTotalOrderSum();
  }

  public countPizzas(chosenPizza: Pizza): number {
    return this.pizzaService.orderedPizzas.filter(pizza => pizza == chosenPizza).length;
  }

  public addPizza(chosenPizza: Pizza): void {
    this.pizzaService.orderedPizzas.push(chosenPizza);
    this.calculateTotalOrderSum();
  }

  public removePizza(chosenPizza: Pizza): void {
    const numberOfPizzas: number = this.pizzaService.orderedPizzas.filter(pizza => pizza == chosenPizza).length;
    this.pizzaService.orderedPizzas = this.pizzaService.orderedPizzas.filter(pizza => pizza !== chosenPizza);
    for (let i = 0; i < numberOfPizzas - 1; i++) {
      this.pizzaService.orderedPizzas.push(chosenPizza);
    }
    this.calculateTotalOrderSum();
  }
}
