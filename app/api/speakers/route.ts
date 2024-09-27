import { NextResponse } from "next/server";

export async function GET() {
  try {
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
