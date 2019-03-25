package com.expensetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expensetracker.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
