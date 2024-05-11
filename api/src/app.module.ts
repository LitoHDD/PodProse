import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ValidateUserModule } from './validate-user/validate-user.module';
import { MulterModule } from '@nestjs/platform-express';
import { FailedLoginModule } from './failed-login/failed-login.module';
import { BruteForceMiddleware } from './middleware/brute-force.middleware';

@Module({
  imports: [ 
    MulterModule.register({ dest: './uploads' }), UsersModule, AuthModule, PrismaModule, ValidateUserModule, FailedLoginModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BruteForceMiddleware)
      .forRoutes('auth/login');
  }
}
