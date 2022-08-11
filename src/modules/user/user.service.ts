import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async doUserRegisteration(
    userRegister: UserRegisterRequestDto,
  ): Promise<User> {
    
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
    return await user.save();

  }

  async getUserByEmail(email:string):Promise<User | unknown>{
      return User.findOne({where:{email}});
  }

}
