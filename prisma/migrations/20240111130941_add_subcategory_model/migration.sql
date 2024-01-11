/*
  Warnings:

  - You are about to drop the column `parentId` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_parentId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `parentId`;

-- CreateTable
CREATE TABLE `SubCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SubCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategorySubcategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryId` INTEGER NOT NULL,
    `subCategoryId` INTEGER NOT NULL,

    INDEX `CategorySubcategory_categoryId_idx`(`categoryId`),
    INDEX `CategorySubcategory_subCategoryId_idx`(`subCategoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategorySubcategories` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategorySubcategories_AB_unique`(`A`, `B`),
    INDEX `_CategorySubcategories_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CategorySubcategory` ADD CONSTRAINT `CategorySubcategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategorySubcategory` ADD CONSTRAINT `CategorySubcategory_subCategoryId_fkey` FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategorySubcategories` ADD CONSTRAINT `_CategorySubcategories_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategorySubcategories` ADD CONSTRAINT `_CategorySubcategories_B_fkey` FOREIGN KEY (`B`) REFERENCES `SubCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
