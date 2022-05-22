import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { MutanteComponent } from './components/mutante/mutante.component';

const routes: Routes = [
  { path: 'home', component: MutanteComponent},
  { path: 'estadistica', component: EstadisticaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'estadistica'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
