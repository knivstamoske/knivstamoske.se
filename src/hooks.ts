import { deLocalizeUrl } from '$lib/i18n/runtime';

export const reroute = (request: { url: string | URL }) => deLocalizeUrl(request.url).pathname;
