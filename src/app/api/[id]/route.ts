import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const data = await fetch(
    `https://api.typeform.com/forms/${process.env.NEXT_PUBLIC_FORM_ID}/responses?included_response_ids=${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER}`,
        contentType: "application/json",
      },
    }
  );
  const userResults = await data.json();
  console.log(userResults);
  return NextResponse.json(userResults);
}
