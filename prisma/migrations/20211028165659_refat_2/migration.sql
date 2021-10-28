-- AlterTable
ALTER TABLE "AcoesAfirmativas" ALTER COLUMN "tematicas" SET NOT NULL,
ALTER COLUMN "tematicas" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Dimensao" ALTER COLUMN "tiposAcoesRealizadas" SET NOT NULL,
ALTER COLUMN "tiposAcoesRealizadas" SET DATA TYPE TEXT;
