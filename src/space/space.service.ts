import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { parseAll as parseLaunches } from './space.common';
import { SpaceRepository } from './space.repository';

@Injectable()
export class SpaceService {
  [x: string]: any;
  constructor(
    @InjectRepository(SpaceRepository)
    private spaceRepository: SpaceRepository,
  ) {}

  public async getSpaceData() {
    try {
      let res = await axios.get('https://api.spacexdata.com/v3/launches');
      const launches = res.data;
      res = await axios.get('https://api.spacexdata.com/v3/rockets');
      const rockets = res.data;
      return parseLaunches(launches, rockets);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
