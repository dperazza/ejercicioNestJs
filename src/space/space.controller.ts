import { Body, Controller, Get, Post } from '@nestjs/common';
import { Favorite } from './space.entity';
import { SpaceService } from './space.service';

@Controller('space')
export class SpaceController {
  constructor(private spaceService: SpaceService) {}

  @Post('favorite')
  createCommerce(@Body() favorite: Favorite): Promise<Favorite> {
    return this.spaceService.save(favorite);
  }
  @Get()
  getCommerces(): any {
    return this.spaceService.getSpaceData();
  }
}
