import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadoComponent,
    EditEmpleadoComponent,
    ListEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
