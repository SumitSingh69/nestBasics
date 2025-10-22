import { Controller, Get, Post, Body, Delete, Param, Patch, Query } from '@nestjs/common';
import {tasksService} from "./tasks.service";
import { Task } from './entities/task.schema';
import { createTaskDto } from './create-task.dto';


// getTask by Id
// pagination
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
  async getTasks(@Query('page') page: number = 1, @Query('limit') limit: number = 4) {
    try{
        const tasks = await this.tasksService.getTasks(page, limit);
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

  @Patch('/update/:id')
  async updateTask(@Param('id') id: string, @Body() updateTaskDto: createTaskDto) {
    try{
        const result = await this.tasksService.updateTask(id, updateTaskDto);
        return {
            message: 'Task updated successfully',
            result,
        }
    }catch(error){
        return {
            message: 'Error updating task',
            error: error.message,
        }
    }
  }

  @Get('/get/:id')
  async getTaskById(@Param('id') id: string) {
    try{
        const task = await this.tasksService.getTaskById(id);
        return {
            message: 'Task retrieved successfully',
            task,
        }
    }catch(error){
        return {
            message: 'Error retrieving task',
            error: error.message,
        }
    }
  }
}
