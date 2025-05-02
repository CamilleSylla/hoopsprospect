import { UserAccessLevelLabel, UserProfileTypeLabel } from "@/app/database/generated/prisma";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const profileType = await prisma.userProfileType.findFirst({ where: { label: UserProfileTypeLabel.PLAYER }, select: { id: true } })
        const accessLevel = await prisma.userAccessLevel.findFirst({ where: { label: UserAccessLevelLabel.VIEWER }, select: { id: true } })
        if (!profileType) throw new Error('No profile type found')
        //@todo: this should nbe removed when profile is include in frontend form
        const { id } = await prisma.user.create({
            data: {
                ...body,
                profile_type: {
                    connect: {
                        id: profileType.id
                    }
                },
                access_level: {
                    connect: {
                        id: accessLevel?.id
                    }
                }
            }
        })
        return NextResponse.json({ id })
    } catch (error) {
        return NextResponse.json({ message: 'Something happened', error })
    }
}