-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "catalog";

-- CreateTable
CREATE TABLE "catalog"."tipos_descripcion" (
    "id_tipo_descripcion" CHAR(2) NOT NULL,
    "nombre_tipo_descripcion" VARCHAR(50) NOT NULL,

    CONSTRAINT "tipos_descripcion_pkey" PRIMARY KEY ("id_tipo_descripcion")
);
