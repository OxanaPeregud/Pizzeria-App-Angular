import {Component, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";

const PIZZAS: Pizza[] = [
  {
    id: '0',
    name: 'Пепперони',
    image: '/assets/images/pepperoni.png',
    featured: true,
    label: 'Острая',
    price: '17.50',
    description: 'Пицца с пепперони, цветочным медом, острым халапеньо, сыром Моцарелла и фирменным томатным соусом'
  },
  {
    id: '1',
    name: 'Bonfesto',
    image: '/assets/images/bonfesto.png',
    featured: true,
    label: 'Новая',
    price: '20.10',
    description: 'Кремчиз и шпинат, бекон, курица, грибы, томаты, моцарелла, смесь 3х сыров, шарики моцарелла в кунжуте, чипсы из пармезана'
  },
  {
    id: '2',
    name: 'Альпийская',
    image: '/assets/images/alpen.png',
    featured: true,
    label: '',
    price: '20.10',
    description: 'Мясная пицца с пикантной пепперони, альпийскими колбасками, Моцареллой, луком и соусом Барбекю'
  },
  {
    id: '3',
    name: 'Веганская',
    image: '/assets/images/vegan.png',
    featured: true,
    label: 'Вегетарианская',
    price: '18.60',
    description: 'Томатный соус, веганский сыр, томаты, шампиньоны, лук, сладкий зеленый перец, маслины'
  },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public pizzas: Pizza[] = PIZZAS;

  constructor() {
  }

  ngOnInit(): void {
  }
}
