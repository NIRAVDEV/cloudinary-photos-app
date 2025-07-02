// src/app/api/login/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SECRET_CODE = process.env.SECRET_CODE || "1234";

export async function POST(req: NextRequest) {
  const { secret } = await req.json();

  if (secret === SECRET_CODE) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("auth", "valid", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "lax",
    });
    return res;
  }

  return NextResponse.json({ message: "Invalid secret code" }, { status: 401 });
}
