import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const getData = async () => {
    const data = await prisma.userCard.findMany()
    return data;
}