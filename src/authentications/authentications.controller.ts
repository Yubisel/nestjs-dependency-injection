import { Controller, Get, Inject } from '@nestjs/common';
import {
  AUTHENTICATION_SERVICE,
  AuthenticationInterface,
} from './authentication.interface';

@Controller('authentications')
export class AuthenticationsController {
  constructor(
    @Inject(AUTHENTICATION_SERVICE)
    private readonly authenticationService: AuthenticationInterface,
  ) {}

  @Get()
  handleRequest() {
    return this.authenticationService.handle();
  }
}
