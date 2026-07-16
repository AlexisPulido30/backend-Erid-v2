import { UpdateTipoDescripcionDto } from '../../../dtos/catalog/update-tipo-descripcion.dto';
import { TipoDescripcionEntity } from '../../../entities/catalog/tipo-descripcion.entity';
import { TipoDescripcionRepository } from '../../../repositories/catalog/tipo-descripcion.repository';

export class UpdateTipoDescripcionUseCase {
    constructor(

        private readonly repository: TipoDescripcionRepository,
    ) {}

     execute(idTipoDescripcion: string, updateTipoDescripcionDto: UpdateTipoDescripcionDto): Promise<TipoDescripcionEntity> {
        return this.repository.updateById(idTipoDescripcion, updateTipoDescripcionDto);
    }
}