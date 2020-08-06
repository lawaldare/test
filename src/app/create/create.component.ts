import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  departmentForm: FormGroup;
  // department = new Department();

  dname: string;
  apiKey: string;
  dcpName: string;
  dcpEmail: string;
  dcpTelephone: number;


  constructor(private dptService: DepartmentService, private router: Router) { }

  ngOnInit(): void {

  }


  save(form: NgForm) {

    const newDepartment = {
      name: form.value.dname,
      apiKey: form.value.apiKey,
      dcpName: form.value.dcpName,
      dcpEmail: form.value.dcpEmail,
      dcpTelephone: form.value.dcpTelephone
    }
    this.dptService.addNewdepartment(newDepartment);
    this.router.navigate(['/']);


  }

}
