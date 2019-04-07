package com.expensetracker.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.expensetracker.entities.Expense;

class ExpenseTest {

	private EntityManagerFactory emf;
	private EntityManager em;
	Expense exp;

	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventTrackerProject");
		em = emf.createEntityManager();
		exp = em.find(Expense.class, 24);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test_expense_table() {
		assertEquals(24, exp.getId());
		assertEquals("Target", exp.getName());
	}
	
	@Test
	public void test_expense_category_one_to_many_assosiation() {
		assertEquals(24, exp.getId());
		assertEquals("Groceries", exp.getCategory().getName());
	}

}
