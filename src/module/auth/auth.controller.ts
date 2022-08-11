import { Controller, Post, UseGuards,Request } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  
  @UseGuards(LocalAuthGuard)

  @Post('login')
  async login(@Request() req):Promise<any>{
      // console.log('auth Controller',req.body);
      // return req.body;
      return req.user
  }
}
