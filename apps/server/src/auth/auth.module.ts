import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";

import { AuthGuard } from "./auth.guard";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

@Module({
  providers: [
    AuthResolver,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
