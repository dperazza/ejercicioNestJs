import { EntityRepository, Repository } from 'typeorm';
import { Favorite } from './space.entity';

@EntityRepository(Favorite)
export class SpaceRepository extends Repository<Favorite> {}
