-- CreateTable
CREATE TABLE "covid_data" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "variant" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "num_sequences" INTEGER NOT NULL,
    "perc_sequences" INTEGER NOT NULL,
    "num_sequences_total" INTEGER NOT NULL,

    CONSTRAINT "covid_data_pkey" PRIMARY KEY ("id")
);
