export const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const baseUrl = 'https://api.dev.coinghost.com/blogs';
