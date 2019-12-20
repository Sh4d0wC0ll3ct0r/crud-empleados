import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';


const routes: Routes = [
  { path: '' , component: ListEmpleadoComponent },
  { path: 'list-empleado' , component: ListEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
