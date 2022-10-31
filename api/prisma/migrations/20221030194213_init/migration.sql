-- CreateTable
CREATE TABLE "InvestorsTransactions" (
    "id" SERIAL NOT NULL,
    "addressUserFrom" TEXT NOT NULL,
    "addressUserTo" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InvestorsTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investor" (
    "addressUser" TEXT NOT NULL,
    "referralId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Investor_addressUser_key" ON "Investor"("addressUser");
