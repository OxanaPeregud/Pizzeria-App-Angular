import {Injectable} from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PIZZAS} from "../shared/pizzas";
import {delay, Observable, of} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() {
  }

  public getPizzas(): Observable<Pizza[]> {
    return of(PIZZAS);
  }

  public getPizzasWithDelay(): Observable<Pizza[]> {
    return of(PIZZAS)
      .pipe(
        delay(2000)
      );
  }

  public getFeaturedPizzas(): Observable<Pizza[]> {
    return of(PIZZAS.filter(pizza => pizza.featured));
  }

  public getPizza(id: string): Observable<Pizza> {
    return of(PIZZAS.filter(pizza => pizza.id === id)[0]);
  }

  public getPizzasIds(): Observable<string[]> {
    return of(PIZZAS.map(pizza => pizza.id));
  }

  public onFormValueChanged(formGroup: FormGroup, formErrors: any, validationMessages: any, data?: any) {
    if (!formGroup) {
      return;
    }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        formErrors[field] = '';
        const control = formGroup.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
