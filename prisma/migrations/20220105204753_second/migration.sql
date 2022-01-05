/*
  Warnings:

  - You are about to drop the column `farmId` on the `Farm` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Farm` table. All the data in the column will be lost.
  - Added the required column `farm_id` to the `Farm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Farm` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Farm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "farm_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "longitude" REAL NOT NULL,
    "latitude" REAL NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_Farm" ("id", "latitude", "location", "longitude") SELECT "id", "latitude", "location", "longitude" FROM "Farm";
DROP TABLE "Farm";
ALTER TABLE "new_Farm" RENAME TO "Farm";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
