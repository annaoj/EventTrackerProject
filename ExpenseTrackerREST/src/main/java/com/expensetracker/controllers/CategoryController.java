package com.expensetracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracker.entities.Category;
import com.expensetracker.services.CategoryService;


@CrossOrigin({ "*", "http://localhost:4204" })
@RestController
@RequestMapping("api")
public class CategoryController {

	@Autowired
	private CategoryService service;


	@GetMapping("categories")
	public List<Category> findAllCategories() {
		return service.findAllCategories();
	}
	

}
