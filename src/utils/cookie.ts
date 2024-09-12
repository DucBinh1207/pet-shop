import cookie from "cookie";

export function getCookie(name: string): string | undefined {
  if (typeof window !== "undefined") {
    const cookies = cookie.parse(document.cookie);
    return cookies[name];
  }
  return undefined;
}
