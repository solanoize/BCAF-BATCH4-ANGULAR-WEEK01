import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  listOfHobi: Hobi[] = [
    new Hobi(1, 'Memasak'),
    new Hobi(2, 'Mancing'),
    new Hobi(3, 'Membaca'),
  ];

  form: FormGroup = new FormGroup({
    name: new FormControl('Yanwar', VALIDATORS.nameValidator),
    isMarried: new FormControl(true),
    gender: new FormControl('', VALIDATORS.genderValidator),
    hobi: new FormControl(0, VALIDATORS.hobiValidator),
    address: new FormGroup({
      city: new FormControl('', VALIDATORS.address.cityValidator),
      street: new FormControl('', VALIDATORS.address.streetValidator),
      zipCode: new FormControl('', VALIDATORS.address.zipCodeValidator),
    }),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
