import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing"; // Import your routing config

export default getRequestConfig(async ({ requestLocale }) => {
  // We await the locale from the request
  let locale = await requestLocale;

  // Ensure that a valid locale is used; fallback if necessary
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
