package com.expensetracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracker.entities.Expense;
import com.expensetracker.repositories.ExpenseRepository;

@Service
public class ExpenseServiceImpl implements ExpenseService {

	@Autowired
	private ExpenseRepository repo;

	@Override
	public List<Expense> findAllExpenses() {
		return repo.findAll();
	}

	@Override
	public Expense findExpenseById(Integer id) {
		Optional<Expense> exp = repo.findById(id);
		System.out.println(exp + "$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		if (exp.isPresent()) {
			exp.get();
		}
		return null;
	}

	@Override
	public Expense create(Expense expense) {
		System.out.println(expense + "%%%%%%%%%%%%%%%%%%%%%%%");
		if (expense.getCategory() == null) {
			expense.getCategory().setId(1);
		}

		return repo.saveAndFlush(expense);
	}

}
