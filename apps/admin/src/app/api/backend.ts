import axios from 'axios';
import { EmployeeInput, Employees } from '../pages/Ems/Ems';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ustaw swój backend URL
});

export const fetchEmployees = () => api.get<Employees[]>('/employees');
export const createEmployee = (employee: EmployeeInput) => api.post('/employees', employee);
export const updateEmployee = (id: string, employee: EmployeeInput) => api.put(`/employees/${id}`, employee);
export const deleteEmployee = (id: string) => api.delete(`/employees/${id}`);

export default api;