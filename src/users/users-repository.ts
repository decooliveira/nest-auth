import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

import { User } from './user.model';

@Injectable()
export class UsersRepository {}
