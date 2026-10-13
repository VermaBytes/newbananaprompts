import { NextResponse, type NextRequest } from "next/server";
import publicSlugs from "@/data/public-post-slugs.json";

const knownPosts = new Set(publicSlugs);
const knownCategories = new Set(["ai-tools", "ai-prompts", "earn-money"]);

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  // Overwrite caller-provided values; this header only identifies the route.
  const slug = request.nextUrl.pathname.match(/^\/post\/([^/]+)\/?$/)?.[1];
  const category = request.nextUrl.pathname.match(/^\/category\/([^/]+)\/?$/)?.[1];
  if (request.nextUrl.pathname === "/404" || (slug && !knownPosts.has(decodeURIComponent(slug))) ||
    (category && !knownCategories.has(decodeURIComponent(category)))) {
    requestHeaders.set("x-post-slug", "");
    return NextResponse.rewrite(new URL("/404", request.url), {
      status: 404,
      request: { headers: requestHeaders }
    });
  }
  requestHeaders.set("x-post-slug", slug ? decodeURIComponent(slug) : "");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
