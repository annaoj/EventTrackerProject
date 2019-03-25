package com.expensetracker.services;

import java.util.List;

import com.expensetracker.entities.Category;

public interface CategoryService {
	public List<Category> findAllCategories();
}
