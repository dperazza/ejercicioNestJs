import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CommercesModule } from './space/space.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'nuclear',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommercesModule,
  ],
})
export class AppModule {}
