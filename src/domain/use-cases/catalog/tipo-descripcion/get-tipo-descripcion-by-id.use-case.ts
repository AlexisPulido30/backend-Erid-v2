import { TipoDescripcionEntity } from '../../../entities/catalog/tipo-descripcion.entity';
import { TipoDescripcionRepository } from '../../../repositories/catalog/tipo-descripcion.repository';

export class GetByIdTipoDescripcionUseCase {

  constructor(
    private readonly repository: TipoDescripcionRepository,
  ) {}

  execute(idTipoDescripcion: string): Promise<TipoDescripcionEntity> {
    return this.repository.getById(idTipoDescripcion);
  }

}