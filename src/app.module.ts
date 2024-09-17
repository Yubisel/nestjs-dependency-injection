import { Module, Scope } from '@nestjs/common';
import { CybersourceService } from './authentications/cybersource.service';
import { EBizChargeService } from './authentications/ebiz-charge.service';
import { PaypalService } from './authentications/paypal.service';
import { AuthenticationServiceFactory } from './authentications/authentication-service-factory.service';
import {
  AUTHENTICATION_SERVICE,
  AuthenticationInterface,
} from './authentications/authentication.interface';
import { AuthenticationsController } from './authentications/authentications.controller';

@Module({
  imports: [],
  controllers: [AuthenticationsController],
  providers: [
    CybersourceService,
    EBizChargeService,
    PaypalService,
    {
      provide: AUTHENTICATION_SERVICE,
      useFactory: (
        serviceFactory: AuthenticationServiceFactory,
      ): AuthenticationInterface => serviceFactory.getService(),
      inject: [AuthenticationServiceFactory],
      scope: Scope.REQUEST,
    },
    AuthenticationServiceFactory,
  ],
  exports: [AUTHENTICATION_SERVICE],
})
export class AppModule {}
