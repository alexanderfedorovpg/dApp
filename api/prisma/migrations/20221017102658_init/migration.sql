-- CreateTable
CREATE TABLE "InvestorsTransactions" (
    "id" SERIAL NOT NULL,
    "addressUserFrom" TEXT NOT NULL,
    "addressUserTo" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InvestorsTransactions_pkey" PRIMARY KEY ("id")
);
