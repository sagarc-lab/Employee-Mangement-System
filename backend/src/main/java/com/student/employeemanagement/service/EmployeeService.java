package com.student.employeemanagement.service;

import com.student.employeemanagement.model.Employee;
import com.student.employeemanagement.repository.EmployeeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> findAll() {
        return repository.findAll();
    }

    public Employee findById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Employee not found"));
    }

    public Employee create(Employee employee) {
        if (repository.existsByEmailIgnoreCase(employee.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "An employee with this email already exists");
        }
        employee.setId(null);
        return repository.save(employee);
    }

    public Employee update(Long id, Employee input) {
        Employee current = findById(id);
        repository.findByEmailIgnoreCase(input.getEmail()).ifPresent(existing -> {
            if (!existing.getId().equals(id)) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "An employee with this email already exists");
            }
        });
        current.setFirstName(input.getFirstName());
        current.setLastName(input.getLastName());
        current.setEmail(input.getEmail());
        current.setDepartment(input.getDepartment());
        current.setJobTitle(input.getJobTitle());
        current.setSalary(input.getSalary());
        return repository.save(current);
    }

    public void delete(Long id) {
        Employee employee = findById(id);
        repository.delete(employee);
    }
}
