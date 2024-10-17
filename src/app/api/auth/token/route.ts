import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { token } = await req.json();
    if (!token) {
      return new Response("Token is required", {
        status: 400,
      });
    }

    return new Response("Cookie set successfully", {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token};httpOnly;sameSite="Strict";path="/"`,
      },
    });
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}

export async function GET(req: NextRequest) {
  if (req.method === "GET") {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (token) {
      return Response.json(token.value);
    } else {
      return new Response("No token found", {
        status: 400,
      });
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}

export async function DELETE(req: NextRequest) {
  if (req.method === "DELETE") {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    if (token) {
      return new Response("Cookie delete successfully", {
        status: 200,
        headers: {
          "Set-Cookie": `token=;httpOnly;maxAge=0;sameSite="Strict";path="/"`,
        },
      });
    } else {
      return new Response("No token found", {
        status: 400,
      });
    }
  } else {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
}
