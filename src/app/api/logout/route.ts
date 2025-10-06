import { CacheKeysEnum } from "@/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    cookieStore.delete(CacheKeysEnum.USER);

    return NextResponse.json(
      { ok: true, data: "Usuário deslogado" },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    let message = "Erro ao realizar logout, entre em contato com o suporte.";

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
