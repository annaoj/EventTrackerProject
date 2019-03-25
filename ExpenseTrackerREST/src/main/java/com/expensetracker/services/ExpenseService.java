package com.expensetracker.services;

import java.util.List;

import com.expensetracker.entities.Expense;

public interface ExpenseService {
	public List<Expense> findAllExpenses();

	public Expense findExpenseById(Integer id);

	public Expense create(Expense expense);
}
