/*
  Warnings:

  - You are about to drop the `_categorysubcategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorysubcategories` DROP FOREIGN KEY `_CategorySubcategories_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorysubcategories` DROP FOREIGN KEY `_CategorySubcategories_B_fkey`;

-- AlterTable
ALTER TABLE `course` MODIFY `thumbnail` VARCHAR(255) NULL,
    MODIFY `startDate` DATETIME(3) NULL,
    MODIFY `endDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `instructor` ADD COLUMN `image` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_categorysubcategories`;

-- CreateTable
CREATE TABLE `_CategoryToSubCategory` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoryToSubCategory_AB_unique`(`A`, `B`),
    INDEX `_CategoryToSubCategory_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CategoryToSubCategory` ADD CONSTRAINT `_CategoryToSubCategory_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToSubCategory` ADD CONSTRAINT `_CategoryToSubCategory_B_fkey` FOREIGN KEY (`B`) REFERENCES `SubCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
