import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];
  formEmployee: Employee = this.emptyEmployee();
  editingId: number | null = null;
  loading = false;
  errorMessage = '';
  successMessage = '';
  searchText = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void { this.loadEmployees(); }

  get filteredEmployees(): Employee[] {
    const query = this.searchText.trim().toLowerCase();
    if (!query) return this.employees;
    return this.employees.filter(e =>
      `${e.firstName} ${e.lastName} ${e.email} ${e.department} ${e.jobTitle}`.toLowerCase().includes(query)
    );
  }

  get departmentCount(): number {
    return new Set(this.employees.map(e => e.department.trim().toLowerCase()).filter(Boolean)).size;
  }

  loadEmployees(): void {
    this.loading = true;
    this.errorMessage = '';
    this.employeeService.getAll().subscribe({
      next: data => { this.employees = data; this.loading = false; },
      error: () => {
        this.errorMessage = 'Could not load employees. Check that Spring Boot and MySQL are running.';
        this.loading = false;
      }
    });
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      this.errorMessage = 'Please complete all fields with valid values.';
      return;
    }
    this.errorMessage = '';
    this.successMessage = '';
    const wasEditing = this.editingId !== null;
    const request = wasEditing
      ? this.employeeService.update(this.editingId as number, this.formEmployee)
      : this.employeeService.create(this.formEmployee);

    request.subscribe({
      next: () => {
        this.successMessage = wasEditing ? 'Employee updated successfully.' : 'Employee added successfully.';
        this.resetForm(form);
        this.loadEmployees();
      },
      error: err => {
        this.errorMessage = err?.error?.message || 'Unable to save employee. Check the values and try again.';
      }
    });
  }

  edit(employee: Employee): void {
    this.editingId = employee.id ?? null;
    this.formEmployee = { ...employee };
    this.errorMessage = '';
    this.successMessage = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  delete(employee: Employee): void {
    if (!employee.id || !window.confirm(`Delete ${employee.firstName} ${employee.lastName}?`)) return;
    this.employeeService.delete(employee.id).subscribe({
      next: () => {
        this.successMessage = 'Employee deleted successfully.';
        this.loadEmployees();
      },
      error: () => this.errorMessage = 'Unable to delete employee.'
    });
  }

  resetForm(form?: NgForm): void {
    this.editingId = null;
    this.formEmployee = this.emptyEmployee();
    form?.resetForm(this.formEmployee);
    this.errorMessage = '';
  }

  private emptyEmployee(): Employee {
    return { firstName: '', lastName: '', email: '', department: '', jobTitle: '', salary: 0 };
  }
}
