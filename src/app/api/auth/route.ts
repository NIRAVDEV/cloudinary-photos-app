// src/app/api/auth/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SECRET_CODE = process.env.SECRET_CODE || "1234";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.code === SECRET_CODE) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("auth", "valid", {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 day
    });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
