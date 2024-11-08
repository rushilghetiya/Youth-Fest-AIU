-- CreateEnum
CREATE TYPE "TRAVEL_MODE" AS ENUM ('BUS', 'TRAIN', 'FLIGHT');

-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE', 'OTHERS');

-- CreateEnum
CREATE TYPE "EVENT_TYPE" AS ENUM ('FINE_ARTS', 'LITERARY', 'MUSIC', 'DANCE', 'THEATRE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userResponseId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserResponse" (
    "id" TEXT NOT NULL,
    "contingentStrength" INTEGER NOT NULL,
    "totalContingentMale" INTEGER NOT NULL,
    "totalContingentFemale" INTEGER NOT NULL,
    "arrivalDate" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "arrivalMode" "TRAVEL_MODE" NOT NULL,
    "departureDate" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "departureMode" "TRAVEL_MODE" NOT NULL,
    "eligibilityCertificatesUrl" TEXT NOT NULL,
    "CurriculumVitaeUrl" TEXT NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "transactionNumber" TEXT NOT NULL,
    "transactionPhotoUrl" TEXT NOT NULL,

    CONSTRAINT "UserResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContingentInCharge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "gender" "GENDER" NOT NULL,
    "address" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "userResponseId" TEXT,

    CONSTRAINT "ContingentInCharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipationDetails" (
    "id" TEXT NOT NULL,
    "eventType" "EVENT_TYPE" NOT NULL,
    "event" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "GENDER" NOT NULL,
    "DOB" TEXT NOT NULL,
    "modeOfParticipation" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "userResponseId" TEXT,

    CONSTRAINT "ParticipationDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_userResponseId_key" ON "User"("userResponseId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userResponseId_fkey" FOREIGN KEY ("userResponseId") REFERENCES "UserResponse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContingentInCharge" ADD CONSTRAINT "ContingentInCharge_userResponseId_fkey" FOREIGN KEY ("userResponseId") REFERENCES "UserResponse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipationDetails" ADD CONSTRAINT "ParticipationDetails_userResponseId_fkey" FOREIGN KEY ("userResponseId") REFERENCES "UserResponse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
