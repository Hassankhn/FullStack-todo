import { NextRequest,NextResponse } from "next/server";

const Get=(req:NextRequest)=>{
    return NextResponse.json({message : 'The api is called'});


}