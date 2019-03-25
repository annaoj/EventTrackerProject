package com.expensetracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracker.entities.Category;
import com.expensetracker.repositories.CategoryRepository;



@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepository repo;

	@Override
	public List<Category> findAllCategories() {	
		return repo.findAll();
	}
}
