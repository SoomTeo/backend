/*
  Warnings:

  - You are about to drop the `dailyWeeklyProgress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `survey` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `mission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dailyWeeklyProgress` DROP FOREIGN KEY `dailyWeeklyProgress_userId_fkey`;

-- DropForeignKey
ALTER TABLE `survey` DROP FOREIGN KEY `survey_userId_fkey`;

-- AlterTable
ALTER TABLE `mission` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `age` INTEGER NULL,
    ADD COLUMN `gender` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `dailyWeeklyProgress`;

-- DropTable
DROP TABLE `survey`;

-- CreateTable
CREATE TABLE `FriendRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fromUserId` INTEGER NOT NULL,
    `toUserId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DailyWeeklyProgress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `progress` INTEGER NOT NULL DEFAULT 0,
    `targetPoints` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyQuestion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyAnswer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `questionId` INTEGER NOT NULL,
    `score` INTEGER NOT NULL,

    UNIQUE INDEX `SurveyAnswer_userId_questionId_key`(`userId`, `questionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SurveyResult` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `totalScore` INTEGER NOT NULL,
    `level` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `SurveyResult_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mission` ADD CONSTRAINT `mission_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_fromUserId_fkey` FOREIGN KEY (`fromUserId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_toUserId_fkey` FOREIGN KEY (`toUserId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DailyWeeklyProgress` ADD CONSTRAINT `DailyWeeklyProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyAnswer` ADD CONSTRAINT `SurveyAnswer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyAnswer` ADD CONSTRAINT `SurveyAnswer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `SurveyQuestion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SurveyResult` ADD CONSTRAINT `SurveyResult_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
