import { Injectable } from '@angular/core';
import { DISHES } from '../shared/DISHES'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(){
    return DISHES;
  }
}
