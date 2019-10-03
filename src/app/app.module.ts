import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
