import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // constructor(private authService:AuthService) {
  //   super();
  // }

  // async validate(email:string,password:string){
  //   console.log('validate...');
    
  //   const user = await this.authService.validateUserCred(email,password)

  //   console.log(user,'jdjdjdbgj');
    
  //   if(!user) throw new UnauthorizedException
  //   return user
  // }
}
