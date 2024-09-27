import { NextResponse } from "next/server";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET() {
  try {
    await delay(2500);

    const response = await fetch(
      "https://my-json-server.typicode.com/cnova305/my-server/speakers",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch speakers data");
    }

    const data = await response.json();

    return NextResponse.json({ success: true, speakers: data });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
