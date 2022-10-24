import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpaceController } from './space.controller';
import { SpaceService } from './space.service';
import { SpaceRepository } from './space.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SpaceRepository])],
  controllers: [SpaceController],
  providers: [SpaceService],
})
export class CommercesModule {}
