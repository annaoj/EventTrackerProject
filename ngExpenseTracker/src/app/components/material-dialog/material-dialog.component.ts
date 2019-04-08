import { Category } from './../../models/category';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.css']
})
export class MaterialDialogComponent implements OnInit {
  form: FormGroup;
  description: string;
  name: string;
  cost: string;
  date: string;
  categoryName: string;
  category: object;
  header = 'Create Form';
  selected: Expense = null;
  selectedCat = '';

  // categoryVals = [
  //   {value: '1', viewValue: 'Groceries'},
  //   {value: '2', viewValue: 'Entertainment'},
  //   {value: '3', viewValue: 'Bills'}
  // ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MaterialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    if (data) {
      this.selected = data;
      this.selectedCat = this.selected.category.id.toString();
      this.header = 'Update Form';
    }
   }

  ngOnInit() {
    // this.nameFormControl = new FormControl('', [
    //   Validators.required
    // ]);
    if (this.selected) {
      this.form = this.fb.group({
        id: [ this.selected.id, []],
        description: [this.selected.description, []],
        name: [this.selected.name, []],
        cost: [this.selected.cost, []],
        date: [this.selected.date, []],
        categoryName: [this.selected.category.name, []],
        categoryId: [this.selected.category.id, []],
        selectedCat: [this.selected.category.id, []]
    });
    } else {
      this.form = this.fb.group({
        description: [this.description, []],
        name: [this.name, []],
        cost: [this.cost, []],
        date: [this.date, []],
        categoryName: [this.categoryName, []],
    });

  }
  }

    close() {
    this.dialogRef.close();
  }
    save() {
    console.log(this.form.value);
    this.form.value.category = {
      id: this.selectedCat
    };
    this.dialogRef.close(this.form.value);
  }

}
