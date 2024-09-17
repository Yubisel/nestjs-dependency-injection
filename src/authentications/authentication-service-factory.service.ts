import { Injectable, Inject, Request } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { AuthenticationInterface } from './authentication.interface';
import { CybersourceService } from './cybersource.service';
import { EBizChargeService } from './ebiz-charge.service';
import { PaypalService } from './paypal.service';

@Injectable()
export class AuthenticationServiceFactory {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly cybersource: CybersourceService,
    private readonly ebizCharge: EBizChargeService,
    private readonly paypal: PaypalService,
  ) {}

  getService(): AuthenticationInterface {
    const serviceType = this.request.headers['x-service-type'];

    const serviceMap = {
      cybersource: this.cybersource,
      ebizCharge: this.ebizCharge,
      paypal: this.paypal,
    };

    const authenticationService = serviceMap[serviceType];

    if (!authenticationService) {
      throw new Error('Invalid service type');
    }
    return authenticationService;
  }
}
