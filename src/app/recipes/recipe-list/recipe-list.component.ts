import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
// import {} from '../../../

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Recipe 1', 'Test Recipe lorem ipsum','../../../assets/recipe1.jpeg'),
  new Recipe('Recipe 1', 'Test Recipe lorem ipsum','../../../assets/recipe1.jpeg')];

  constructor() { }

  ngOnInit() {
  }

}
