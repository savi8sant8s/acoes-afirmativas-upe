/*
  Warnings:

  - You are about to drop the column `tematicas` on the `AcoesAfirmativas` table. All the data in the column will be lost.
  - Added the required column `tematicas` to the `Grupo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AcoesAfirmativas" DROP COLUMN "tematicas";

-- AlterTable
ALTER TABLE "Grupo" ADD COLUMN     "tematicas" TEXT NOT NULL;
