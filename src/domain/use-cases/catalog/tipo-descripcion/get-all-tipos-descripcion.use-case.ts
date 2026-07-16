import { TipoDescripcionEntity } from '../../../entities/catalog/tipo-descripcion.entity';
import { TipoDescripcionRepository } from '../../../repositories/catalog/tipo-descripcion.repository';

export class GetAllTiposDescripcionUseCase {

  constructor(
    private readonly repository: TipoDescripcionRepository,
  ) {}

  execute(): Promise<TipoDescripcionEntity[]> {
    return this.repository.getAll();
  }

}