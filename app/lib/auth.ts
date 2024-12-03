import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const handlers = {
  GET: async (req: NextRequest) => {
    try {
      const token = await getToken({ req });
      if (token) {
        return new NextResponse(JSON.stringify(token), { status: 200 });
      } else {
        return new NextResponse("No session found", { status: 401 });
      }
    } catch (error) {
      console.error(error);
      return new NextResponse("Error in GET request", { status: 500 });
    }
  },
};
