export class UpdateTipoDescripcionDto {
  constructor(public readonly nombreTipoDescripcion: string) {}

  static update(
    object: Record<string, unknown>,
  ): [string?, UpdateTipoDescripcionDto?] {
    const {nombreTipoDescripcion } = object;

    if (nombreTipoDescripcion === undefined) {
      return ['Debe enviar al menos un campo para actualizar'];
    }

    if (typeof nombreTipoDescripcion !== 'string') {
      return ['El nombre debe ser una cadena de texto'];
    }

    const nombreNormalizado = nombreTipoDescripcion.trim();

    if (nombreNormalizado.length === 0) {
      return ['El nombre no puede estar vacío'];
    }

    if (nombreNormalizado.length > 50) {
      return ['El nombre no puede superar 50 caracteres'];
    }

    return [
      undefined,
      new UpdateTipoDescripcionDto(nombreNormalizado),
    ];
  }
}
