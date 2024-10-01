import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  faAdd,
  faBorderAll,
  faList,
  faSave,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

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
  active = 1;
  isGrid = false;
  icon = {
    add: faAdd,
    list: faList,
    grid: faBorderAll,
    save: faSave,
    remove: faTrash,
  };

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      employees: this.formBuilder.array([], [Validators.required]),
    });
  }

  getEmployees(): FormArray {
    return this.form.get('employees') as FormArray;
  }

  getEmployee(indexEmployee: number): FormGroup {
    return this.getEmployees().at(indexEmployee) as FormGroup;
  }

  newEmployee() {
    return this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
          ,
        ],
      ],
      skills: this.formBuilder.array([], [Validators.required]),
    });
  }

  addEmployee() {
    this.getEmployees().push(this.newEmployee());
  }

  removeEmployee(indexEmployee: number) {
    this.getEmployees().removeAt(indexEmployee);
  }

  getSkills(indexEmployee: number): FormArray {
    return this.getEmployee(indexEmployee).get('skills') as FormArray;
  }

  getSkill(indexEmployee: number, indexSkill: number): FormGroup {
    return this.getSkills(indexEmployee).at(indexSkill) as FormGroup;
  }

  newSkill() {
    return this.formBuilder.group({
      skill: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      exp: [0, [Validators.required]],
    });
  }

  addSkill(indexEmployee: number) {
    this.getSkills(indexEmployee).push(this.newSkill());
  }

  removeSkill(indexEmployee: number, indexSkill: number) {
    this.getSkills(indexEmployee).removeAt(indexSkill);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
