import { HomeComponent } from './../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component'; 
import { Routes } from "@angular/router";

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'menu', component:MenuComponent},
    {path:'dishdetail/:id',  component:DishDetailComponent},
    {path:'contact', component:ContactComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'}
];