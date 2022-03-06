import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroListPageComponent } from './menu-pages/superhero-list-page/superhero-list-page.component';

const routes: Routes = [
  { path: 'superhero-list-page', component: SuperheroListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
