import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalGuard } from './local.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalGuard)
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }
}
