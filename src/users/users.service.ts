import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users-repository';

export class UsersService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private usersRepository: UsersRepository) {}
  async getByEmail(email: string) {
    // FOR IMPLEMENTATION WITH A REAL DATABASE
    this.usersRepository.findByEmail(email);
    return {
      _id: '1234',
      name: 'Deco Oliveira',
      email: 'deco.oliveira@mail.com',
      password: 'pass123',
    };
  }
}
