import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  class:any="";
  dish!: Dish;
  flag:any=false;
  constructor(private dishService:DishService,
    private route:ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }
  goBack(){
    this.location.back();
  }
  
  changeColor(){
    if(this.flag){
      this.class='';
    }else{
      this.class='like';
    }
    this.flag=!this.flag;
  }
  share(){
    window.location.href='http://twitter.com/';
  }
}
