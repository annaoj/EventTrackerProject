package com.expensetracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracker.entities.Expense;
import com.expensetracker.services.ExpenseService;



@RestController
@RequestMapping("api")
public class ExpenseController {

	@Autowired
	private ExpenseService service;

	@GetMapping("expenses")
	public List<Expense> findAllExpenses() {
		return service.findAllExpenses();
	}
	
	@GetMapping("expenses/{eid}")
	public Expense findExpenseById(@PathVariable("eid") Integer id,HttpServletResponse response, HttpServletRequest request) {
		try {
			Expense p = service.findExpenseById(id);
			System.out.println(p + "############");
			if (p == null) {
				response.setStatus(404);
			} else {
				StringBuffer url = request.getRequestURL();
				url.append("/");
				url.append(id);
				response.setHeader("Location", url.toString());

				response.setStatus(201);
			}

			return p;
		} catch (Exception e) {
			response.setStatus(500);
			return null;
		}
	}
	
	@PostMapping("expenses")
	public Expense createExpenses(@RequestBody Expense expense, HttpServletResponse response, HttpServletRequest request) {
		try {
			service.create(expense);
			StringBuffer url = request.getRequestURL();
			System.out.println("expenseController" + url.toString());
			url.append("/");
			url.append(expense.getId());
			response.setHeader("Location", url.toString());
			response.setStatus(201);
			return expense;
		} catch (Exception e) {
			response.setStatus(400);
			return null;
		}

	}
	

}
