import { User, UserAccessLevelLabel, UserProfileTypeLabel } from "@/app/database/generated/prisma";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession()
    if (!session || !session.user?.email) {
        return NextResponse.json({ message: "You are not connected", status: 404 })
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                email: session.user.email
            },
            omit: {
                password: true,
            }
        })

        if (!user) {
            return NextResponse.json({ message: `User with email{${id}} not found` })
        }

        const type = await prisma.userProfileType.findFirst({
            where: {
                id: user?.user_profile_type_id
            },
            select: {
                label: true
            }
        })

        if (!type) {
            return NextResponse.json({ message: `User type with id{${user.user_profile_type_id}} not found` })
        }

        const accessLevel = await prisma.userAccessLevel.findFirst({
            where: {
                id: user?.user_access_level_id
            },
            select: {
                label: true
            }
        })
        if (!accessLevel) {
            return NextResponse.json({ message: `User access level with id{${user.user_access_level_id}} not found` })
        }

        return NextResponse.json<IUserProfileData>({ user, type: type?.label, access_level: accessLevel?.label })

    } catch (error) {
        return NextResponse.json(error)

    }
}

export interface IUserProfileData {
    user: Omit<User, "password">;
    type: UserProfileTypeLabel;
    access_level: UserAccessLevelLabel;
}