import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DepartmentsComponent } from './departments/departments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: DepartmentsComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: ':id', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
