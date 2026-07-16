import { CreateTipoDescripcionDto } from '../../../dtos/catalog/create-tipo-descripcion.dto';
import { TipoDescripcionEntity } from '../../../entities/catalog/tipo-descripcion.entity';
import { TipoDescripcionRepository } from '../../../repositories/catalog/tipo-descripcion.repository';

export class CreateTipoDescripcionUseCase {

  constructor(
    private readonly repository: TipoDescripcionRepository,
  ) {}

  execute(createTipoDescripcionDto: CreateTipoDescripcionDto): Promise<TipoDescripcionEntity> {
    return this.repository.create(createTipoDescripcionDto);
  }

}