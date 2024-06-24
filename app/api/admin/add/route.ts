import connectDB from "@/lib/mongo";
import Users from "@/models/userCollection";
import { hash } from "bcrypt-ts";
import { NextRequest } from "next/server";

connectDB();

export async function POST(req: NextRequest){
    try {
        const body = await req.json();
        const hashedPassword = await hash(body?.password, 10)
        const newAdmin = new Users({
            Email: body?.email,
            Password: hashedPassword,
            IsAdmin: true,
        })
        const savedUser = await newAdmin.save();
        return Response.json(savedUser)
    } catch (error) {
        console.log(error)
    }
}

export const dynamic = "force-dynamic";