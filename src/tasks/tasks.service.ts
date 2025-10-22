import { Injectable } from '@nestjs/common';

@Injectable()
export class tasksService {
  getHello(): string {
    return 'Hello Sumit! from tasks';
  }
}
