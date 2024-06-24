import { Injectable } from '@nestjs/common';


export type Employees = {
  id: string;
  name: string;
  position: string;

}

const reviews: Employees[] = [
  {
          id: "1",
          name: "Jan",
          position: "magazynier"
        },
        {
          id: "2",
          name: "Stefan",
          position: "kierownik"
        },
        {
          id: "3",
          name: "Piotr",
          position: "monter"
        }
]


@Injectable()
export class EmployeesService {
  getEmployees(): Employees[] {
    return reviews;
  }

  getEmployee(id: Employees['id']): Employees {
    return reviews[0];
  }
  
  createEmployees(data): Employees {
    reviews.push(data);
    return data;
  }

  deleteEmployees(id: Employees['id']){
    return null;
  }

}
