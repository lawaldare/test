import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: string;
  department: any;
  dname: string;
  apiKey: string;
  dcpName: string;
  dcpEmail: string;
  dcpTelephone: number;

  constructor(private route: ActivatedRoute, private dService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getDepartment(this.id)
    })
  }


  getDepartment(id) {
    this.department = this.dService.getDepartment(id);
    this.dname = this.department.name;
    this.apiKey = this.department.apiKey;
    this.dcpName = this.department.dcpName;
    this.dcpEmail = this.department.dcpEmail;
    this.dcpTelephone = this.department.dcpTelephone;

  }

  save(form: NgForm) {

    const newDepartment = {
      name: form.value.dname,
      apiKey: form.value.apiKey,
      dcpName: form.value.dcpName,
      dcpEmail: form.value.dcpEmail,
      dcpTelephone: form.value.dcpTelephone
    }
    this.dService.addNewdepartment(newDepartment);
    this.router.navigate(['/']);


  }

}
