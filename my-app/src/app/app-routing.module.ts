import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  {path: 'home', component: PokeListComponent}, 
  {path: 'pokemon-detail/:name', component: PokeDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
