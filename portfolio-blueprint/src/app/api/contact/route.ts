import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Semua field wajib diisi." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { ok: false, error: "Format email tidak valid." },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return Response.json(
        { ok: false, error: "Input melebihi batas karakter." },
        { status: 400 }
      );
    }

    await db.insert(contactMessages).values({ name, email, message });

    return Response.json({
      ok: true,
      message: "Pesan Anda telah terkirim! Saya akan segera merespons.",
    });
  } catch {
    return Response.json(
      { ok: false, error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
