import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'FormArray SetValue & PatchValue Example';

  teachersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teachersForm = this.fb.group({
      teachers: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    // this.teachers().valueChanges.subscribe((value: any) => {
    //   // console.log('VALUE TEACHERS', value);
    //   for (let ti of value.keys()) {
    //     this.batches(ti).valueChanges.subscribe((valueBatches: any) => {
    //       console.log('BATCHES', valueBatches);
    //       for (let bi of valueBatches.keys()) {
    //       }
    //     });
    //   }
    //   // value.forEach
    //   // this.batches()
    // });
  }

  changeBatch(ti: number, bi: number) {
    let value: { name: string } = this.batches(ti).at(bi).value;
    this.batches(ti).at(bi).patchValue({ name: value.name.toUpperCase() });
  }

  /** Teachers */
  teachers(): FormArray {
    return this.teachersForm.get('teachers') as FormArray;
  }

  newTeacher(): FormGroup {
    return this.fb.group({
      name: '',
      batches: this.fb.array([]),
    });
  }

  addTeacher() {
    this.teachers().push(this.newTeacher());
  }

  removeTeacher(ti: number) {
    this.teachers().removeAt(ti);
  }

  /** batches */

  batches(ti: number): FormArray {
    return this.teachers().at(ti).get('batches') as FormArray;
  }

  newBatch(): FormGroup {
    return this.fb.group({
      name: '',
      students: this.fb.array([]),
    });
  }

  addBatch(ti: number) {
    let bacth: FormGroup = this.newBatch();
    this.batches(ti).push(bacth);
  }

  removeBatch(ti: number, bi: number) {
    this.batches(ti).removeAt(ti);
  }

  /** students */

  students(ti: number, bi: number): FormArray {
    return this.batches(ti).at(bi).get('students') as FormArray;
  }

  newStudent(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }

  addStudent(ti: number, bi: number) {
    this.students(ti, bi).push(this.newStudent());
  }

  removeStudent(ti: number, bi: number, si: number) {
    this.students(ti, bi).removeAt(si);
  }

  patchValue1() {
    var data = {
      teachers: [
        {
          name: 'Teacher 1',
          batches: [
            {
              name: 'Batch No 1',
              students: [
                { name: 'Ramesh' },
                { name: 'Suresh' },
                { name: 'Naresh' },
              ],
            },
            {
              name: 'Batch No 2',
              students: [
                { name: 'Vikas' },
                { name: 'Harish' },
                { name: 'Lokesh' },
              ],
            },
          ],
        },
      ],
    };
    this.clearFormArray();

    data.teachers.forEach((t) => {
      var teacher: FormGroup = this.newTeacher();
      this.teachers().push(teacher);

      t.batches.forEach((b) => {
        var batch = this.newBatch();

        (teacher.get('batches') as FormArray).push(batch);

        b.students.forEach((s) => {
          (batch.get('students') as FormArray).push(this.newStudent());
        });
      });
    });

    this.teachersForm.patchValue(data);
  }

  clearFormArray() {
    //Angular 8 +
    this.teachers().clear();

    //older Versions of angualar
    //while (this.teachers().length) {
    //  this.teachers().removeAt(0);
    //}
  }

  onSubmit() {
    console.log(this.teachersForm.value);
  }
}
