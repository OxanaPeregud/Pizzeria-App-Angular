import {Component, Inject, OnInit} from '@angular/core';
import {expand} from "../animations/app.animation";
import {MatDialog} from "@angular/material/dialog";
import {PizzasListComponent} from "../pizzas-list/pizzas-list.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    expand()
  ]
})
export class AboutComponent implements OnInit {

  constructor(@Inject('BaseURL') public BaseURL: string,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public openPizzasList(): void {
    this.dialog.open(PizzasListComponent, {
        width: '500px',
        height: 'auto'
      }
    );
  }
}
