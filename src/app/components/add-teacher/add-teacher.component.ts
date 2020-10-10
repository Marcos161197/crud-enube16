import { TeacherService } from './../../services/teacher.service';
import { Teacher } from './../../shared/teacher';
//import { Component, OnInit ,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teacherForm: FormGroup;
  @ViewChild('resetTeacherForm', { static: true }) myNgForm;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private teacherApi:TeacherService,
  ) { }

  ngOnInit() {
    this.submitBookForm();
  }

  submitBookForm() {
    this.teacherForm = this.fb.group({
      teacher_name: ['', [Validators.required]],
      teacher_app: ['', [Validators.required]],
      teacher_apm: ['', [Validators.required]],
      teacher_dni: ['', [Validators.required]],
    })
  }

   /* Get errors */
   public handleError = (controlName: string, errorName: string) => {
    return this.teacherForm.controls[controlName].hasError(errorName);
  }

  submitStudentForm() {
    if (this.teacherForm.valid) {
      this.teacherApi.AddTeacher(this.teacherForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
      });
    }
  }
}

