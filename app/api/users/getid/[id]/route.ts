import connectDB from "@/lib/mongo";
import Users from "@/models/userCollection";
import { NextRequest } from "next/server";
connectDB()

export async function GET(req: NextRequest, { params }:{ params: { id: string }}){
    try {
        const user = await Users.findById(params.id, { Password: 0 });
        return Response.json(user)
    } catch (error) {
        console.log(error)
    }
}

export const dynamic = "force-dynamic";