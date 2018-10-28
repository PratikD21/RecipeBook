import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe ('A Test Recipe', 'This is very simple', 'https://c1.staticflickr.com/6/5560/31594880802_9d7270dfc5_b.jpg') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
