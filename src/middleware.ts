import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    // Make sure you don't have "/" inside of publicRoutes
    publicRoutes: ["/api/uploadthing"],
    afterAuth(auth, req, evt) {
        // handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
          return redirectToSignIn({ returnBackUrl: req.url });
        }
        // redirect them to organization selection page
        if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/"){
          const orgSelection = new URL('/', req.url)
          return NextResponse.redirect(orgSelection)
        }
      }
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


