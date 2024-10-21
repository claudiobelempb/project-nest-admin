/*
  Warnings:

  - You are about to drop the column `password_confirm` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "password_confirm";
