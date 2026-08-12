import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    await db.insert(contactMessages).values({ name, email, message });

    return Response.json({ ok: true, message: "Pesan berhasil dikirim!" });
  } catch {
    return Response.json(
      { ok: false, error: "Gagal mengirim pesan. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
