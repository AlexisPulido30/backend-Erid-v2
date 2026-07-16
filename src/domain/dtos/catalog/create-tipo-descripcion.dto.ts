export class CreateTipoDescripcionDto {
  private constructor(
    public readonly idTipoDescripcion: string,
    public readonly nombreTipoDescripcion: string,
  ) {}

  static create(
    object: Record<string, unknown>,
  ): [string?, CreateTipoDescripcionDto?] {
    const { idTipoDescripcion, nombreTipoDescripcion } = object;

    if (typeof idTipoDescripcion !== 'string') {
      return ['El id del tipo de descripción es obligatorio'];
    }

    const idNormalizado = idTipoDescripcion.trim().toUpperCase();

    if (idNormalizado.length !== 2) {
      return ['El id del tipo de descripción debe tener 2 caracteres'];
    }

    if (typeof nombreTipoDescripcion !== 'string') {
      return ['El nombre del tipo de descripción es obligatorio'];
    }

    const nombreNormalizado = nombreTipoDescripcion.trim();

    if (nombreNormalizado.length === 0) {
      return ['El nombre del tipo de descripción no puede estar vacío'];
    }

    if (nombreNormalizado.length > 50) {
      return [
        'El nombre del tipo de descripción no puede superar 50 caracteres',
      ];
    }

    return [
      undefined,
      new CreateTipoDescripcionDto(idNormalizado, nombreNormalizado),
    ];
  }
}