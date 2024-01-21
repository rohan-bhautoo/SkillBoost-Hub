-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_courseDetailsId_fkey`;

-- AlterTable
ALTER TABLE `course` MODIFY `courseDetailsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_courseDetailsId_fkey` FOREIGN KEY (`courseDetailsId`) REFERENCES `CourseDetails`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
