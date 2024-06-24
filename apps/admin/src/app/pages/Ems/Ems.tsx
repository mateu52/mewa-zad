import { useEffect, useState } from "react";
import { deleteEmployee, fetchEmployees } from "../../api/backend";
//import { EmsForm } from "../Ems-form";
export type Employees = {
    id: string;
    name: string;
    position: string;
  
  }
  export type EmployeeInput = {
    name: string;
    position: string;
};
export function Ems(){
    const [ employees, setEmployees ] = useState<Employees[]>([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const response = await fetchEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    }
    const handleDelete = async (id: string) => {
        await deleteEmployee(id);
        loadEmployees();
    }

    return (
        <div>
            {/* <EmsForm reloadEmployees={loadEmployees} /> */}
            <ul>
                {employees.map((employee: Employees) => (
                    <li key={employee.id}>
                        {employee.name} = {employee.position}
                        <button onClick={() => handleDelete(employee.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}