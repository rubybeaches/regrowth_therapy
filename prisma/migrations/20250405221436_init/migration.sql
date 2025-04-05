-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientSessions" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "thumbnail" TEXT,
    "url" TEXT,
    "duration" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ClientSessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityVideos" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "thumbnail" TEXT,
    "url" TEXT,
    "duration" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityVideos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ClientSessions" ADD CONSTRAINT "ClientSessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
