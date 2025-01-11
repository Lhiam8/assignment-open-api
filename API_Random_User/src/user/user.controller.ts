import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('random')
  getRandomUser() {
    return this.userService.getRandomUser();
  }

  @Get('multiple')
  getMultipleUsers(@Query('count', ParseIntPipe) count: number) {
    return this.userService.getMultipleUsers(count);
  }

  @Get('by-gender')
  getUsersByGender(@Query('gender') gender: 'male' | 'female') {
    return this.userService.getUsersByGender(gender);
  }
} 