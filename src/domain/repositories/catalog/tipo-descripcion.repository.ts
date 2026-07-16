import {CreateTipoDescripcionDto} from '../../dtos/catalog/create-tipo-descripcion.dto';
import {UpdateTipoDescripcionDto} from '../../dtos/catalog/update-tipo-descripcion.dto';
import { TipoDescripcionEntity } from '../../entities/catalog/tipo-descripcion.entity';
export abstract class TipoDescripcionRepository {
  abstract create(
    createTipoDescripcionDto: CreateTipoDescripcionDto,
  ): Promise<TipoDescripcionEntity>;

  abstract getAll(): Promise<TipoDescripcionEntity[]>;

  abstract getById(
    idTipoDescripcion: string,
  ): Promise<TipoDescripcionEntity>;

  abstract updateById(
    idTipoDescripcion: string,
    updateTipoDescripcionDto: UpdateTipoDescripcionDto,
  ): Promise<TipoDescripcionEntity>;

  abstract deleteById(
    idTipoDescripcion: string,
  ): Promise<TipoDescripcionEntity>;
}