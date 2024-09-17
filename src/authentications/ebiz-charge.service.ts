import { Injectable } from '@nestjs/common';
import { AuthenticationInterface } from './authentication.interface';

@Injectable()
export class EBizChargeService implements AuthenticationInterface {
  handle(): string {
    return 'EBizCharge Service handling the request';
  }
}
