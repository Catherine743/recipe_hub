import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Recipe } from './recipe/recipe';
import { ViewRecipe } from './view-recipe/view-recipe';
import { SaveRecipe } from './save-recipe/save-recipe';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Pnf } from './pnf/pnf';


export const routes: Routes = [
    {
        path: "", component: Home, title: "home-page"
    },
    {
        path: "login", component: Login, title: "login-page"
    },
    {
        path: "register", component: Register, title: "register-page"
    },
    {
        path: "recipe", component: Recipe, title: "recipe-page"
    },
    {
        path: "view-recipe/:id", component: ViewRecipe, title: "view-page"
    },
    {
        path: "recipe/save", component: SaveRecipe, title: "save-recipe-page"
    },
    {
        path: "about", component: About, title: "about-page"
    },
    {
        path: "contact", component: Contact, title: "contact-page"
    },
    {
        path: "**", component: Pnf, title: "pnf-page"
    }
];
