/*
  Warnings:

  - You are about to drop the `_categorytosubcategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categorysubcategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytosubcategory` DROP FOREIGN KEY `_CategoryToSubCategory_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytosubcategory` DROP FOREIGN KEY `_CategoryToSubCategory_B_fkey`;

-- DropForeignKey
ALTER TABLE `categorysubcategory` DROP FOREIGN KEY `CategorySubcategory_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `categorysubcategory` DROP FOREIGN KEY `CategorySubcategory_subCategoryId_fkey`;

-- AlterTable
ALTER TABLE `course` ALTER COLUMN `courseDetailsId` DROP DEFAULT;

-- DropTable
DROP TABLE `_categorytosubcategory`;

-- DropTable
DROP TABLE `categorysubcategory`;

-- DropTable
DROP TABLE `subcategory`;
