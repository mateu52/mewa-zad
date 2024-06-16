import { Injectable } from '@nestjs/common';


type Employees = {

    createdTime: string;
    id: number;
    fields: {
        author: string;
        content: string;
        sentiment: string;
        accept?: boolean | undefined;
        created_at: string;
        to_check?: boolean | undefined;

    }
}

const reviews: Employees[] = [
  {
            "id": 214,
            "createdTime": "2023-04-11T16:07:16.000Z",
            "fields": {
                "content": "okokok",
                "accept": true,
                "sentiment": "Neutral",
                "author": "Adam",
                "created_at": "2023-04-11T16:07:16.000Z"
            }
        },
        {
            "id": 432,
            "createdTime": "2022-04-11T16:07:16.000Z",
            "fields": {
                "to_check": true,
                "content": "nie",
                "sentiment": "Neutral",
                "author": "Jan",
                "created_at": "2022-04-11T16:07:16.000Z"
            }
        },
        {
            "id": 2342,
            "createdTime": "2021-04-11T16:07:16.000Z",
            "fields": {
                "content": "tak",
                "accept": true,
                "sentiment": "Negative",
                "author": "Marcin",
                "created_at": "2021-04-11T16:07:16.000Z"
            }
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
