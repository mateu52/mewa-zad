import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { EmployeesService } from './employees.service';

type EmployeesDto = {
  author: string,
  content: string,
}
@Controller('employees')   //localhost:3002/api/reviews
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getEmployees() {
    return this.employeesService.getEmployees()
  }

  @Get(':id')
  getEmployee(@Param(':id') id: number) {
    return this.employeesService.getEmployee(id)
  }

  @Delete(':id')
  async deleteEmployees(@Param(':id') id: number) {
    await this.employeesService.deleteEmployees(id);
    return {};
  }

  @Post()
  createEmployees(@Body() data: EmployeesDto ) {
    return this.employeesService.createEmployees(data)
  }
}
