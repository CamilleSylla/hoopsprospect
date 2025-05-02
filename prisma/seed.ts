import { Prisma, PrismaClient } from "@/app/database/generated/prisma"

const prisma = new PrismaClient()

const profileTypes: Prisma.UserProfileTypeCreateInput[] = [
    {
        label: "PLAYER"
    },
    {
        label: "RECRUITER"
    }
]

const access_level: Prisma.UserAccessLevelCreateInput[] = [
    {
        label: "ADMIN"
    },
    {
        label: "VIEWER"
    }
]
const users: Prisma.UserCreateInput[] = [
    {
        firstname: 'Camille',
        lastname: 'Sylla',
        email: 'carmelosylla@gmail.com',
        date_of_birth: new Date('11/22/1996'),
        password: process.env.ADMIN_PASSWORD || 'admin',
        profile_type: {
            connect: {
                label: "PLAYER"
            }
        },
        access_level: {
            connect: {
                label: "ADMIN"
            }
        }
    }
]

export async function main() {
    for (const type of access_level) {
        const exist = await prisma.userAccessLevel.findFirst({
            where: {
                label: type.label
            }
        })
        if (!exist) {
            console.log(`Creating access level type ${type.label}`);
            await prisma.userAccessLevel.create({ data: type })
        }
    }
    for (const type of profileTypes) {
        const exist = await prisma.userProfileType.findFirst({
            where: {
                label: type.label
            }
        })
        if (!exist) {
            console.log(`Creating profile type ${type.label}`);
            await prisma.userProfileType.create({ data: type })
        }
    }
    for (const u of users) {
        const exist = await prisma.user.findFirst({
            where: {
                email: u.email
            }
        })
        if (!exist) {
            console.log(`Creating user ${u.email}`);
            await prisma.user.create({ data: u })
        }
    }
}

main()