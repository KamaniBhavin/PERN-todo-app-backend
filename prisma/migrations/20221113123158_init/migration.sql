-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'DOING', 'DONE');

-- CreateTable
CREATE TABLE "User"
(
    "id"        TEXT         NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username"  VARCHAR(32)  NOT NULL,
    "password"  TEXT         NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo"
(
    "id"          TEXT         NOT NULL,
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title"       VARCHAR(64)  NOT NULL,
    "description" TEXT         NOT NULL,
    "status"      "Status"     NOT NULL DEFAULT 'PENDING',
    "userId"      TEXT         NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User" ("username");

-- AddForeignKey
ALTER TABLE "Todo"
    ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
