import { Controller, Get } from '@nestjs/common';
import {tasksService} from "./tasks.service";

@Controller('/tasks')
export class tasksController {
  constructor(private readonly tasksService: tasksService) {}

  @Get('/create')
  getHello(): string {
    return this.tasksService.getHello();
  }
}
