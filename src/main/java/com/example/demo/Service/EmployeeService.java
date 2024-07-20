package com.example.demo.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.demo.Model.Employee;

@Service
public class EmployeeService {
    private Map<String, Employee> employees = new HashMap<>();

    public Employee addEmployee(Employee employee) {
    	System.out.println("name="+employee.getName()+"designation:"+employee.getDesignation()+"ctc:"+employee.getCtc()+"==");
        employees.put(employee.getEmail(), employee);
        return employee;
        
    }

    public Collection<Employee> getAllEmployees() {
        return employees.values();
    }
}