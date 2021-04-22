import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  async getByEmail(email: string) {
    return {
      _id: '1234',
      name: 'Deco',
      email: 'deco@mail.com',
      password: 'pass123',
    };
  }
}
