import { NextResponse } from "next/server"
import { jwtVerify } from "jose" 

export async function middleware(request){
    const token = await request.headers.get("Authorization")?.split(" ")[1]

    if(!token){
        return NextResponse.json({message: "No token available"})
    }

    try{
        const secretKey = new TextEncoder().encode("next-market-app-book") 
        const decodedJwt = await jwtVerify(token, secretKey) 
        return NextResponse.next()
    }catch{
        return NextResponse.json({message: "Invalid token, please log in again"})
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}