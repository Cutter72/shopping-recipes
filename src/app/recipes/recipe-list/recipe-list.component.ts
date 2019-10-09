import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Test name',
    'Test description',
    'https://www.aspicyperspective.com/wp-content/uploads/2017/02/best-italian-pasta-salad-13-256x256.jpg')];

  constructor() {
  }

  ngOnInit() {
  }

  addRecipe() {
    this.recipes.push(new Recipe('1', '1', '1'));
  }
}
