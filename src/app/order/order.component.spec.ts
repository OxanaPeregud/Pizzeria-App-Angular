import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OrderComponent} from './order.component';
import {RouterTestingModule} from "@angular/router/testing";
import {PizzaService} from "../services/pizza.service";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {PIZZAS} from "../shared/pizzas";
import {Pizza} from "../shared/pizza";

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  const pizza1: Pizza = PIZZAS[0];
  const pizza2: Pizza = PIZZAS[1];

  beforeEach(async () => {

    const pizzaServiceStub = {
      orderedPizzas: [pizza1, pizza1, pizza2]
    };

    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatDialogModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [OrderComponent],
      providers: [
        {provide: PizzaService, useValue: pizzaServiceStub},
        {provide: MatDialog, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total sum', () => {
    const sum = (Number(pizza1.price) * 2 + Number(pizza2.price)).toFixed(2);
    expect(component.totalSum).toBe(sum.toString());
  });

  it('should sort pizzas', () => {
    let sortedUniquePizzasNames: string[] = ['Бонфесто', 'Пепперони'];
    expect(component.displayedPizzaList()
      .map((pizza => pizza.name)))
      .toEqual(sortedUniquePizzasNames);
  });

  it('should calculate pizza sum', () => {
    const sum = (Number(pizza1.price) * 2).toFixed(2);
    expect(component.calculatePizzaSum(pizza1)).toBe(sum.toString());
  });

  it('should count pizzas', () => {
    expect(component.countPizzas(pizza1)).toBe(2);
  });

  it('should remove pizza', () => {
    expect(component.countPizzas(pizza2)).toBe(1);
    component.removeFromOrder(pizza2);
    expect(component.countPizzas(pizza2)).toBe(0);
  });

  it('should add pizza', () => {
    expect(component.countPizzas(pizza2)).toBe(1);
    component.addPizza(pizza2);
    expect(component.countPizzas(pizza2)).toBe(2);
  });
});
