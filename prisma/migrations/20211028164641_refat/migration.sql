/*
  Warnings:

  - Added the required column `dataResposta` to the `AcoesAfirmativas` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tipo` on the `Dimensao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tipo` on the `Grupo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `vinculoCnpq` on the `Grupo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `participaGrupoAcaoAfirmativa` on the `Professor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `autorizaUtilizacaoInformacoes` on the `Professor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "AcoesAfirmativas" ADD COLUMN     "dataResposta" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Dimensao" DROP COLUMN "tipo",
ADD COLUMN     "tipo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Grupo" DROP COLUMN "tipo",
ADD COLUMN     "tipo" TEXT NOT NULL,
DROP COLUMN "vinculoCnpq",
ADD COLUMN     "vinculoCnpq" TEXT NOT NULL,
ALTER COLUMN "redesSociais" SET NOT NULL,
ALTER COLUMN "redesSociais" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "participaGrupoAcaoAfirmativa",
ADD COLUMN     "participaGrupoAcaoAfirmativa" TEXT NOT NULL,
DROP COLUMN "autorizaUtilizacaoInformacoes",
ADD COLUMN     "autorizaUtilizacaoInformacoes" TEXT NOT NULL;

-- DropEnum
DROP TYPE "RespostaBinaria";

-- DropEnum
DROP TYPE "RespostaTernaria";

-- DropEnum
DROP TYPE "TipoDimensao";

-- DropEnum
DROP TYPE "TipoGrupo";
