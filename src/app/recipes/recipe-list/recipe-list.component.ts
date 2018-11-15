import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe ('A Test Recipe', 'This is very simple', 'https://c1.staticflickr.com/6/5560/31594880802_9d7270dfc5_b.jpg'),
    new Recipe ('Another Test Recipe', 'This is very simple', 'https://c1.staticflickr.com/6/5560/31594880802_9d7270dfc5_b.jpg')  
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
