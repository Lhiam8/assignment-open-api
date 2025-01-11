import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  private readonly baseUrl = 'https://randomuser.me/api';

  constructor(private readonly httpService: HttpService) {}

  async getRandomUser() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(this.baseUrl)
      );
      return response.data.results[0];
    } catch (error) {
      throw new HttpException(
        'Failed to fetch user data',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async getMultipleUsers(count: number) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}?results=${count}`)
      );
      return response.data.results;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch users data',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async getUsersByGender(gender: 'male' | 'female') {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}?gender=${gender}`)
      );
      return response.data.results;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch users data',
        HttpStatus.BAD_REQUEST
      );
    }
  }
} 