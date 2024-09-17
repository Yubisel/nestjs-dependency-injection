import { Injectable } from '@nestjs/common';
import { AuthenticationInterface } from './authentication.interface';

@Injectable()
export class PaypalService implements AuthenticationInterface {
  handle(): string {
    return 'Paypal Service handling the request';
  }
}
