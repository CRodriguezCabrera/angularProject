import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home", loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
  },
  {
    path:"", redirectTo:"home", pathMatch:"full"
  },
  {
    path: "characters/:idCharacter", loadChildren: () => import("./pages/characters-details/characters-details.module").then(m => m.CharactersDetailsModule)
  },
  {
    path: "characters", loadChildren: () => import("./pages/characters-page/characters-page.module").then(m => m.CharactersPageModule)
  },
  {
    path: "location", loadChildren: () => import("./pages/location-page/location-page.module").then(m => m.LocationPageModule)
  },
  {
    path: "episodies", loadChildren: () => import("./pages/episodes-page/episodes-page.module").then(m => m.EpisodesPageModule)
  },
  {
    path: "about", loadChildren: () => import("./pages/about/about.module").then(m => m.AboutModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
