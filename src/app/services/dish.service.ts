import { Injectable } from '@angular/core';
import { DISHES } from '../shared/DISHES'
import { Dish } from '../shared/dish'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(){
    return DISHES;
  }
  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
