import { NextResponse } from "next/server";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  await delay(2500);

  return NextResponse.json(
    { success: false, message: "Failed to load data" },

    { status: 500 },
  );
}
