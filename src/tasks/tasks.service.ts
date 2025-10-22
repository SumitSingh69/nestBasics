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

  async getTasks(): Promise<Task[]> {
    return this.taskModel.find();
  }

  async deleteTask(id: string): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    if (!deletedTask) {
      throw Error('Task not found');
    }
    return deletedTask;
  }
  getHello(): string {
    return 'Hello Sumit! from tasks';
  }
}
