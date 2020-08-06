import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: any;
  filterDepartments: any

  _filterValue: string;
  get filterValue(): string {

    return this._filterValue;
  }

  set filterValue(value: string) {
    this._filterValue = value;
    this.filterDepartments = this.filterValue ? this.performFilter(this.filterValue) : this.departments
  }

  constructor(private dptService: DepartmentService) {

  }

  ngOnInit(): void {
    this.getDepartments();
  }


  getDepartments() {
    this.departments = this.dptService.getDepartments();
    this.filterDepartments = this.departments;

  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLowerCase();
    return this.departments.filter(d => d.name.toLowerCase().indexOf(filterBy) !== -1 || d.apiKey.toLowerCase().indexOf(filterBy) !== -1)
  }

}
