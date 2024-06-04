import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
	constructor(
		@Inject('CATS_REPOSITORY')
		private catsRepository: typeof Cat,
	) {}

	async findAll(): Promise<Cat[]> {
		console.log(CreateCatDto);
		return this.catsRepository.findAll<Cat>();
	}
}
