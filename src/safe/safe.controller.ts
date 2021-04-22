import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';

@Controller('safe')
export class SafeController {
  @UseGuards(JwtGuard)
  @Get()
  getAll() {
    return { value: 'any data' };
  }
}
