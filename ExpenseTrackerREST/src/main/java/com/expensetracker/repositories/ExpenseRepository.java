package com.expensetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expensetracker.entities.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

}
