import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './entities/task.schema';
import { createTaskDto } from './create-task.dto';

@Injectable()
export class tasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async createTask(createTaskDto: createTaskDto): Promise<Task> {
    const newTask = new this.taskModel(createTaskDto);
    return newTask.save();
  }

  async getTasks(page: number, limit:number): Promise<Task[]> {
    return this.taskModel.find().skip((page - 1) * limit).limit(limit);
  }

  async deleteTask(id: string): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    if (!deletedTask) {
      throw Error('Task not found');
    }
    return deletedTask;
  }

  async updateTask(id:string, updateTaskDto : createTaskDto): Promise<Task> {
    const data = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
    if(!data){
        throw Error('Task not found');
    }
    return data;
  }
  getHello(): string {
    return 'Hello Sumit! from tasks';
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id);
    if(!task){
        throw Error('Invalid id');
    }
    return task;

  }
}
