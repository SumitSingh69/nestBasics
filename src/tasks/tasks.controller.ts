import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import {tasksService} from "./tasks.service";
import { Task } from './entities/task.schema';
import { createTaskDto } from './create-task.dto';

@Controller('/tasks')
export class tasksController {
  constructor(private readonly tasksService: tasksService) {}

  @Post('/create')
  async createTask(@Body() createTaskDto: createTaskDto) {
   try{ 
    const task = await this.tasksService.createTask(createTaskDto);
    return {
        message: 'Task created successfully',
        task,
    }}
    catch(error){
        return {
            message: 'Error creating task',
            error: error.message,
        }
    }
  }

  @Get('/getAll') 
  async getTasks() {
    try{
        const tasks = await this.tasksService.getTasks();
        return {
            message: 'Tasks retrieved successfully',
            tasks,
        }
    }catch(error){
        return {
            message: 'Error retrieving tasks',
            error: error.message,
        }
    }
  }

  @Delete('/delete/:id')
  async deleteTask(@Param('id') id: string) {
    try{
        const result = await this.tasksService.deleteTask(id);
        return {
            message: 'Task deleted successfully',
            result,
        }
    }catch(error){
        return {
            message: 'Error deleting task',
            error: error.message,
        }
    }
  }
}
