import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";

//TODO: se va para la config global en _app
// const fetcher = (...args: [key: string]) => fetch(...args).then((res) => res.json());

export const useProducts = (endPoint: string, config: SWRConfiguration = {}) => {
//   const { data, error } = useSWR<IProduct[]>(`/api${endPoint}`,fetcher, config);
  const { data, error } = useSWR<IProduct[]>(`/api${endPoint}`, config);
  
  return {
    products: data || [],
    isLoading: !data && !error,
    error: error,
  }
};
