import {Pizza} from "./pizza";

export const PIZZAS: Pizza[] = [
  {
    id: '0',
    name: 'Пепперони',
    image: '/assets/images/pepperoni.png',
    featured: true,
    label: 'Острая',
    price: '17.50',
    description: 'Пицца с пепперони, цветочным медом, острым халапеньо, сыром Моцарелла и фирменным томатным соусом',
    comments: [
      {
        rating: 5,
        comment: 'Самая вкусная пицца, которую я ела!',
        author: 'Ольга',
        date: '2021-10-16'
      },
      {
        rating: 4,
        comment: 'Вкусная пицца, но мало сыра',
        author: 'Павел',
        date: '2020-09-05'
      },
      {
        rating: 3,
        comment: 'Не очень так пицца',
        author: 'Леша',
        date: '2021-12-14'
      },
    ]
  },
  {
    id: '1',
    name: 'Bonfesto',
    image: '/assets/images/bonfesto.png',
    featured: true,
    label: 'Новая',
    price: '20.10',
    description: 'Кремчиз и шпинат, бекон, курица, грибы, томаты, моцарелла, смесь 3х сыров, шарики моцарелла в кунжуте, чипсы из пармезана',
    comments: [
      {
        rating: 2,
        comment: 'Перебор с соусом',
        author: 'Сергей',
        date: '2021-03-15'
      },
    ]
  },
  {
    id: '2',
    name: 'Альпийская',
    image: '/assets/images/alpen.png',
    featured: true,
    label: '',
    price: '20.10',
    description: 'Мясная пицца с пикантной пепперони, альпийскими колбасками, Моцареллой, луком и соусом Барбекю',
    comments: [
      {
        rating: 5,
        comment: 'Сытно и вкусно!',
        author: 'Мария',
        date: '2022-01-05'
      },
      {
        rating: 5,
        comment: 'Замечательная пицца, мне понравилась',
        author: 'Геннадий',
        date: '2021-14-02'
      },
    ]
  },
  {
    id: '3',
    name: 'Веганская',
    image: '/assets/images/vegan.png',
    featured: true,
    label: 'Вегетарианская',
    price: '18.60',
    description: 'Томатный соус, веганский сыр, томаты, шампиньоны, лук, сладкий зеленый перец, маслины',
    comments: [
      {
        rating: 4,
        comment: 'Нормальная пицца, только мало овощей',
        author: 'Дарья',
        date: '2022-02-02'
      },
    ]
  },
];
