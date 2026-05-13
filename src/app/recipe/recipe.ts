import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Apiservice } from '../services/apiservice';
import { Router } from '@angular/router'
import { SearchPipe } from '../pipe/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipe',
  imports: [Header, FormsModule, SearchPipe, NgxPaginationModule],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {

  allRecipes: any[] = []
  allRecipesDummy: any[] = []
  searchKey: string = ""
  p: number = 1;

  constructor(private api: Apiservice, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes()
  }

  getAllRecipes() {
    this.api.getAllRecipeAPI().subscribe((res: any) => {
      this.allRecipes = res
      this.allRecipesDummy = this.allRecipes
      // console.log(this.allRecipes);
    })
  }

  filterRecipes(key: string, value: string) {
    this.allRecipes = this.allRecipesDummy.filter((item: any) => item[key].includes(value))
  }


}
