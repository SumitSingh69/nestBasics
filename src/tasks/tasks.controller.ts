import { Controller, Get, Post, Body } from '@nestjs/common';
import {tasksService} from "./tasks.service";
import { Task } from './entities/task.schema';
import { createTaskDto } from './create-task.dto';

@Controller('/tasks')
export class tasksController {
  constructor(private readonly tasksService: tasksService) {}

  @Post('/create')
  async createTask(@Body() createTaskDto: createTaskDto) : Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }
}
