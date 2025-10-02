import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"

export async function POST(req:NextRequest) {
    const { name, email, message } = await req.json()

    if(!name || !email || !message) {
        return NextResponse.json(
            { error: "Missing required fields!"},
            { status: 400 }
        )
    }

    const { data, error } = await supabase
    .from('inquiry')
    .insert({name, email, message})
    .select()

    if(error) {
        return NextResponse.json(
            { error: "Something wrong while sending your inquiry! please try again" },
            { status: 500 }
        )
    }

    return NextResponse.json(
        data,
        { status: 200 }
    )
}
