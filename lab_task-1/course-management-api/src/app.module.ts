import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CourseModule } from './course/course.module';

@Module({
  imports: [CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
