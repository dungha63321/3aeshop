import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();

    await User.create({
      name,
      email,
      password,
    });

    return NextResponse.json({
      message: "Đăng ký thành công",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Lỗi đăng ký" },
      { status: 500 }
    );
  }
}