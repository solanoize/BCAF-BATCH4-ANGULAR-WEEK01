import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

class Hobi {
  id: number = 0;
  name: string = '';

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const VALIDATORS = {
  nameValidator: [
    Validators.required,
    Validators.maxLength(15),
    Validators.pattern('^[a-zA-Z]+$'),
  ],
  genderValidator: [Validators.required],
  hobiValidator: [Validators.required],
  address: {
    cityValidator: [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(5),
    ],
    streetValidator: [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(10),
    ],
    zipCodeValidator: [
      Validators.required,
      Validators.maxLength('11620'.length),
      Validators.minLength('11620'.length),
    ],
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      skills: this.formBuilder.array([]),
    });
  }

  getSkills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: ['', [Validators.required]],
      exp: [0, [Validators.required]],
    });
  }

  addSkill() {
    this.getSkills().push(this.newSkill());
  }

  getSkill(index: number): FormGroup {
    return this.getSkills().at(index) as FormGroup;
  }

  removeSkill(index: number) {
    this.getSkills().removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
