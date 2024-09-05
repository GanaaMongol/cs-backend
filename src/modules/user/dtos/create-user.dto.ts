import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    name: 'username',
    required: true,
  })
  firstname: string;
  lastname: string;
  email: string;
  active: string;
  password: string;
}
