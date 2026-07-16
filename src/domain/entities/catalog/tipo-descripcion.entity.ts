export class TipoDescripcionEntity {
  constructor(
    public readonly idTipoDescripcion: string,
    public readonly nombreTipoDescripcion: string,
  ) {
    if (idTipoDescripcion.trim().length !== 2) {
      throw new Error(
        "El identificador del tipo de descripción debe tener 2 caracteres",
      );
    }

    if (nombreTipoDescripcion.trim().length === 0) {
      throw new Error("El nombre del tipo de descripción es obligatorio");
    }
  }
}
