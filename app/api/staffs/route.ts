import Users from "@/models/userCollection";
import { NextRequest } from "next/server"

export async function GET(req: NextRequest){
    try {
        const searchParams: any = req.nextUrl.searchParams;
        const adminid = searchParams.get('adminid');
        if(!adminid) return Response.json({ status: 'failed', message: "Adminid not provided" })
        const allStaffs = await Users.find({ Adminid: adminid }, { Password: 0 });
        return Response.json(allStaffs);
    } catch (error) {
        console.log(error)
    }
}

export const dynamic = "force-dynamic"
