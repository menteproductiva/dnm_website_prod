// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for the ones starting with:
  // - _next (internal files)
  // - api (API routes)
  // - static files (e.g., images, sitemap.xml, robots.txt, favicon.ico)
  matcher: [
    // ----- Match the root and language prefixes -----
    "/",
    "/(es|en)/:path*",

    // Match all paths that don't start with the excluded prefixes
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
