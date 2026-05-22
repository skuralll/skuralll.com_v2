import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/maintenance", request.url), 307);
}

export const config = {
  matcher: [
    "/((?!maintenance|_next/static|_next/image|favicon\\.ico|favicon\\.png|api/).*)",
  ],
};
