import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

async function authSession() {
  const BASE_URL = "https://prd-xereg.temple.edu/StudentRegistrationSsb";
  const txtTerm = "202436";

  try {
    const response = await fetch(`${BASE_URL}/ssb/term/search?mode=search`, {
      method: "POST",
      body: JSON.stringify({ txtTerm }),
    });

    return response.headers;
  } catch (error) {
    console.error("Error in authSession:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(`Middleware triggered for: ${pathname}`);

  // // Allow requests to the root path and credits page to pass through
  // if (pathname === "/" || pathname === "/credits" || pathname === "/setup") {
  //   return NextResponse.next();
  // }

  // // Check if the cookie exists
  // const cookie = request.cookies.get("set-cookie");
  // if (cookie) {
  //   return NextResponse.next(); // Proceed if cookie exists
  // } else {
  //   const headers = await authSession();
  //   if (headers) {
  //     const cookies = headers.get("set-cookie");
  //     if (cookies) {
  //       const response = NextResponse.next();
  //       response.cookies.set("set-cookie", cookies);
  //       return response;
  //     } else {
  //       console.warn("No 'set-cookie' header returned");
  //     }
  //   } else {
  //     console.warn("No valid session headers returned");
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
