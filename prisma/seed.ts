import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const tiposDescripcion = [
  { idTipoDescripcion: 'AR', nombreTipoDescripcion: 'AGN' },
  {
    idTipoDescripcion: 'AU',
    nombreTipoDescripcion: 'Instrumento audiovisual',
  },
  {
    idTipoDescripcion: 'CA',
    nombreTipoDescripcion: 'Instrumento cartográfico',
  },
  {
    idTipoDescripcion: 'CD',
    nombreTipoDescripcion: 'Clase documental',
  },
  {
    idTipoDescripcion: 'CO',
    nombreTipoDescripcion: 'Colección',
  },
  {
    idTipoDescripcion: 'FI',
    nombreTipoDescripcion: 'Ficha',
  },
  {
    idTipoDescripcion: 'FO',
    nombreTipoDescripcion: 'Fondo',
  },
  {
    idTipoDescripcion: 'IC',
    nombreTipoDescripcion: 'Instrumento iconográfico',
  },
  {
    idTipoDescripcion: 'SC',
    nombreTipoDescripcion: 'Sección',
  },
  {
    idTipoDescripcion: 'SE',
    nombreTipoDescripcion: 'Serie',
  },
  {
    idTipoDescripcion: 'SS',
    nombreTipoDescripcion: 'Sub-Serie',
  },
  {
    idTipoDescripcion: 'SU',
    nombreTipoDescripcion: 'Sub-Sección',
  },
  {
    idTipoDescripcion: 'TE',
    nombreTipoDescripcion: 'Instrumento textual',
  },
  {
    idTipoDescripcion: 'TR',
    nombreTipoDescripcion: 'Tira',
  },
  {
    idTipoDescripcion: 'UF',
    nombreTipoDescripcion: 'Unidad de instalación (Ficha)',
  },
  {
    idTipoDescripcion: 'UI',
    nombreTipoDescripcion: 'Unidad de instalación',
  },
];

async function main(): Promise<void> {
  for (const tipo of tiposDescripcion) {
    await prisma.tipoDescripcion.upsert({
      where: {
        idTipoDescripcion: tipo.idTipoDescripcion,
      },
      update: {
        nombreTipoDescripcion: tipo.nombreTipoDescripcion,
      },
      create: tipo,
    });
  }

  console.log('Tipos de descripción insertados correctamente');
}

main()
  .catch((error) => {
    console.error('Error al insertar tipos de descripción:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });