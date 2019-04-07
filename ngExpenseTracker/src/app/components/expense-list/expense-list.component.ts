import { Expense } from './../../models/expense';
import { ExpenseService } from './../../services/expense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  // FIELDS
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.reload();
  }

  // METHODS
  reload() {
    this.expenseService.index().subscribe(
      data => {
        this.expenses = data;
        console.log('just got data');
    },
    err => {
        console.error(err);
    }
    );
  }

  deleteExpense(expense: Expense) {
    console.log(expense);
  }
}
