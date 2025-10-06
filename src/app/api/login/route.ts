import { CacheKeysEnum } from "@/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: Body = await req.json();

    const { username, password } = body;

    if (username !== "admin" || password !== "password") {
      return NextResponse.json(
        { ok: false, error: "Usuário ou senha incorretos." },
        { status: 401 }
      );
    }

    const cookieStore = await cookies();

    cookieStore.set(CacheKeysEnum.USER, username, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.json({ ok: true, data: { username } }, { status: 200 });
  } catch (error: unknown) {
    let message = "Erro ao realizar login, entre em contato com o suporte.";

    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
