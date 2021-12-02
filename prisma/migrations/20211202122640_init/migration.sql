-- CreateEnum
CREATE TYPE "TipoDimensao" AS ENUM ('ENSINO', 'EXTENSAO', 'PESQUISA');

-- CreateEnum
CREATE TYPE "TipoGrupo" AS ENUM ('PESQUISA', 'ESTUDOS', 'EXTENSAO', 'COLETIVO_ESTUDANTES');

-- CreateEnum
CREATE TYPE "LocalReunioes" AS ENUM ('SALA_PROFESSORES', 'SALA_LIDERES', 'OUTROS_ESPACOS_UNIVERSIDADE', 'AREAS_EXTERNAS_UNIVERSIDADE', 'SALA_VIRTUAL', 'OUTROS');

-- CreateEnum
CREATE TYPE "Tematicas" AS ENUM ('INDIGENAS', 'QUILOMBOLAS', 'NEGROS', 'LGBTQIAPLUS', 'CIGANOS', 'MULHERES', 'OUTROS');

-- CreateTable
CREATE TABLE "AcoesAfirmativas" (
    "id" SERIAL NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datAtualizacao" TIMESTAMP(3),
    "tematicas" "Tematicas"[],
    "dataResposta" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcoesAfirmativas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dimensao" (
    "id" SERIAL NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datAtualizacao" TIMESTAMP(3),
    "tipo" "TipoDimensao" NOT NULL,
    "tiposAcoesRealizadas" TEXT NOT NULL,
    "descricaoAcoesRealizadas" TEXT NOT NULL,
    "acaoAfirmativaId" INTEGER NOT NULL,

    CONSTRAINT "Dimensao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datAtualizacao" TIMESTAMP(3),
    "tipo" "TipoGrupo"[],
    "nome" TEXT NOT NULL,
    "liderNome" TEXT NOT NULL,
    "liderEmail" TEXT NOT NULL,
    "vinculoCnpq" BOOLEAN NOT NULL,
    "localReunioes" "LocalReunioes" NOT NULL,
    "redesSociais" TEXT NOT NULL,
    "acaoAfirmativaId" INTEGER NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datAtualizacao" TIMESTAMP(3),
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "autorizaUtilizacaoInformacoes" BOOLEAN NOT NULL,
    "acaoAfirmativaId" INTEGER NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_acaoAfirmativaId_key" ON "Grupo"("acaoAfirmativaId");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_acaoAfirmativaId_key" ON "Professor"("acaoAfirmativaId");

-- AddForeignKey
ALTER TABLE "Dimensao" ADD CONSTRAINT "Dimensao_acaoAfirmativaId_fkey" FOREIGN KEY ("acaoAfirmativaId") REFERENCES "AcoesAfirmativas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grupo" ADD CONSTRAINT "Grupo_acaoAfirmativaId_fkey" FOREIGN KEY ("acaoAfirmativaId") REFERENCES "AcoesAfirmativas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_acaoAfirmativaId_fkey" FOREIGN KEY ("acaoAfirmativaId") REFERENCES "AcoesAfirmativas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
