package com.expensetracker.test;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.expensetracker.entities.Category;

class CategoryTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Category category;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventTrackerProject");
		em = emf.createEntityManager();
		category = em.find(Category.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test_category_table() {
		Category category = em.find(Category.class, 4);
		assertEquals(4, category.getId());
		assertEquals("Health", category.getName());
	}
	
	@Test
	public void test_category_expense_many_to_one_assosiation() {
		Category category = em.find(Category.class, 1);
		assertTrue(category.getExpenses().size()>0);
	}
	
}
