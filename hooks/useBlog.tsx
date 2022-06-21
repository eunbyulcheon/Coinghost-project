import useSWR from "swr";

const fetcher = (url :string)  => fetch(url).then((res) => res.json());
const baseUrl = 'https://api.dev.coinghost.com';

export const useGetBlog = () => {
    const { data, error } = useSWR(baseUrl, fetcher);
    console.log(data);

    return { data, error };
}