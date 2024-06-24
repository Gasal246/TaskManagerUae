import connectDB from "@/lib/mongo";
import { NextRequest } from "next/server";

connectDB();

export async function POST(req: NextRequest){
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const dynamic = "force-dynamic";