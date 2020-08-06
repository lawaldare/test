import { db } from './../db/db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  dbArray = db;


  getDepartments() {
    return [...this.dbArray];
  }

  addNewdepartment(data) {
    this.dbArray.push(data);
  }

  getDepartment(id) {
    return this.dbArray.find(d => d.id === id);
  }
}
