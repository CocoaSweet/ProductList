import axios, {AxiosPromise} from "axios"
import { ProductData } from "../interface/ProductData"
import { useQuery } from "@tanstack/react-query"

const API_URL = 'http://productlist-production-33aa.up.railway.app'

const fetchData = async (): AxiosPromise<ProductData[]> => {
    const response = axios.get(API_URL + '/product')
    return response
}

export function useProductData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['product-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}