import { Injectable } from '@nestjs/common';
import { AuthenticationInterface } from './authentication.interface';

@Injectable()
export class CybersourceService implements AuthenticationInterface {
  handle(): string {
    return 'Cybersource Service handling the request';
  }
}
