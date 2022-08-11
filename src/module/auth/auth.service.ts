import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private userService:UserService){

  }
  async validateUserCred(email:string,password:string):Promise<any>{

      const user = await this.userService.getUserByEmail(email);
      
      console.log(user,'user...........');
      
      if(!user) throw new BadRequestException();

      // if(!bcrypt.compare(password,user.password))
      // throw new UnauthorizedException();

      return user;

  }
}
