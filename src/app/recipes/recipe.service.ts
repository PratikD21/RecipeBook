import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Taesty Meal',
            'This is very simple',
            'https://c1.staticflickr.com/6/5560/31594880802_9d7270dfc5_b.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),

        new Recipe(
            'Burger',
            'This is very simple',
            'https://c1.staticflickr.com/6/5560/31594880802_9d7270dfc5_b.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 20)
            ])
    ];

    constructor(private slService:ShoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}