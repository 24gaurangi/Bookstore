import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

// @Injectable()
export class RecipeService {
    private recipes: Recipe[] = [new Recipe('Recipe 1', 'Test Recipe lorem ipsum','../../../assets/recipe1.jpeg'),
    new Recipe('Recipe 2', 'Test 2 Recipe lorem ipsum','../../../assets/recipe1.jpeg')];

    getRecipes(){
        return this.recipes.slice();
    }
}