import { Component, OnInit } from '@angular/core';
import { Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe("This is a test", "this is a test description", "https://google.com/123.png"),
  ];
  constructor() {
    console.log(this.recipies);
  }

  ngOnInit() {
  }

}
