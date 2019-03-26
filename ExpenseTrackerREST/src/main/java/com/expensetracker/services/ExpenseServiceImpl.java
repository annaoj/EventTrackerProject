package com.expensetracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracker.entities.Category;
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
		if (exp.isPresent()) {
			return exp.get();
		}
		return null;
	}

	@Override
	public Expense create(Expense expense) {
		if (expense.getCategory() == null) {
			Category cat = new Category();
			cat.setId(1);
			expense.setCategory(cat);
		}

		return repo.saveAndFlush(expense);
	}
	
	@Override
	public Boolean delete(int id) {
		repo.deleteById(id);

		if (repo.existsById(id)) {
			return false;
		} else {
			return true;
		}

	}
	

}
