/*
  Warnings:

  - You are about to drop the column `user_type_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_access_level_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_profile_type_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserAccessLevelLabel" AS ENUM ('ADMIN', 'VIEWER');

-- CreateEnum
CREATE TYPE "UserProfileTypeLabel" AS ENUM ('PLAYER', 'RECRUITER');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_user_type_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_type_id",
ADD COLUMN     "user_access_level_id" INTEGER NOT NULL,
ADD COLUMN     "user_profile_type_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UserType";

-- DropEnum
DROP TYPE "UserTypesLabel";

-- CreateTable
CREATE TABLE "UserProfileType" (
    "id" SERIAL NOT NULL,
    "label" "UserProfileTypeLabel" NOT NULL,

    CONSTRAINT "UserProfileType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAccessLevel" (
    "id" SERIAL NOT NULL,
    "label" "UserAccessLevelLabel" NOT NULL,

    CONSTRAINT "UserAccessLevel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfileType_label_key" ON "UserProfileType"("label");

-- CreateIndex
CREATE UNIQUE INDEX "UserAccessLevel_label_key" ON "UserAccessLevel"("label");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_user_profile_type_id_fkey" FOREIGN KEY ("user_profile_type_id") REFERENCES "UserProfileType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_user_access_level_id_fkey" FOREIGN KEY ("user_access_level_id") REFERENCES "UserAccessLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
