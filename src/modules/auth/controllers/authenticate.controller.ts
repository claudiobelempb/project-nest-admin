import { Body, Controller, HttpCode, Post, Res, UsePipes } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation-pipe';
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
  // @HttpCode(201)
  // @UsePipes(new ZodValidationPipe(authenticateSchema))
  // @Res({passthrough: true}) response: Response
  async handle(@Body() request: authenticateSchema) {
    const token = this.jwt.sign({
      sub: 'user-id',
    });

    return token;
  }
}