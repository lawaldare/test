import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DptCardComponent } from './dpt-card/dpt-card.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DepartmentsComponent,
    CreateComponent,
    EditComponent,
    DptCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
