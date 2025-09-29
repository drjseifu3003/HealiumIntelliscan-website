
import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Extract fields from request body
    const { firstName, lastName, company, email, phone, message, terms } = body

    if(!firstName || !lastName || !email || !terms) {
        return NextResponse.json(
            { error: "Missing required fields!" },
            { status: 400 }
        )
    }


    // Insert into demo_booking table
    const { data, error } = await supabase
      .from("demo_booking")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          ...(company && {company}),
          email,
          ...(phone && {phone_number: phone}),
          ...(message && {message}),
          terms_accepted: terms,
          source: "Healium Intelliscan Website"
        },
      ])
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    )
  }
}
