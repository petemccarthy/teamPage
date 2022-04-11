-- CreateTable
CREATE TABLE "teamMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "twitterUrl" TEXT NOT NULL,
    "linkedInURL" TEXT NOT NULL
);
