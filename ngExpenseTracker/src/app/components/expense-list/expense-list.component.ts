import { MaterialDialogComponent } from "./../material-dialog/material-dialog.component";
import { MatTableModule } from "@angular/material/table";
import { Expense } from "./../../models/expense";
import { ExpenseService } from "./../../services/expense.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatSort, MatTableDataSource } from "@angular/material";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginator } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PageEvent } from "@angular/material";
@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.css"]
})
export class ExpenseListComponent implements OnInit {
  // FIELDS
  expenses: Expense[] = [];
  displayedColumns: string[] = [
    // "check",
    "category",
    "name",
    "description",
    "date",
    "cost",
    "update",
    "delete"
  ];
  dataSource: MatTableDataSource<object>;
  isChecked = false;
  totalCost = 0;
  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];
  pageEvent: PageEvent;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private expenseService: ExpenseService,
    public dialog: MatDialog
  ) {}

  load(pageIndex, pageSize, data){
    this.dataSource = new MatTableDataSource<Expense>(
      data.slice(pageIndex, pageIndex + pageSize)
    );
    this.dataSource.paginator = this.paginator;

  }
  ngOnInit() {
    this.reload();
   // this.dataSource.paginator = this.paginator;
  }

  // METHODS

  openCreateDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let updatedExpense = null;
    const dialogRef = this.dialog.open(MaterialDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        updatedExpense = data;
        if (data) {
          this.expenseService.create(updatedExpense).subscribe(
            data1 => {
              if (data1) {
                this.reload();
                updatedExpense = null;
              }
            },
            err => {
              console.error(err);
              console.log("Error in update");
            }
          );
        }
      },
      err2 => {
        console.error("RegisterComponent.register(): error registering.");
        console.error(err2);
      }
    );
  }

  openUpdateDialog(element) {
    console.log(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = element;
    let updatedExpense = null;
    const dialogRef = this.dialog.open(MaterialDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        updatedExpense = data;
        if (data) {
          this.expenseService.update(updatedExpense).subscribe(
            data1 => {
              if (data1) {
                this.reload();
                updatedExpense = null;
              }
            },
            err => {
              console.error(err);
              console.log("Error in update");
            }
          );
        }
      },
      err2 => {
        console.error("RegisterComponent.register(): error registering.");
        console.error(err2);
      }
    );
  }

  onPageChange(e) {
    const PrevPageIndex = e.previousPageIndex;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    const length = e.length;
    this.load(this.pageIndex, this.pageSize,this.expenses);
  }
  reload() {
    this.expenseService.index().subscribe(
      data => {
        this.expenses = data;
        // this.dataSource.data = data;
        this.load(this.pageIndex, this.pageSize,this.expenses);
        this.dataSource.sort = this.sort;
        console.log("just got data");
        this.getTotal(this.expenses);
      },
      err => {
        console.error(err);
      }
    );
  }

  getTotal(expenses) {
    let sum = 0;
    expenses.forEach(element => {
      sum = sum + element.cost;
    });
    this.totalCost = sum;
  }

  deleteExpense(id: number) {
    console.log(id);
    this.expenseService.destroy(id).subscribe(
      data => {
        console.log("delete data + " + data);
        this.reload();
      },
      err => {
        console.error(err);
      }
    );
  }
}
