import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { z } from 'zod';

export const authenticateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type authenticateSchema = z.infer<typeof authenticateSchema>;

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  //@HttpCode(201)
  //@UsePipes(new ZodValidationPipe(authenticateSchema))
  async handle(@Body() request: authenticateSchema) {
    const token = this.jwt.sign({
      sub: 'user-id',
    });

    return token;
  }
}