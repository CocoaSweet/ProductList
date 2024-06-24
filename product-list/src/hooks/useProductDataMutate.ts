import axios, {AxiosPromise} from "axios"
import { ProductData } from "../interface/ProductData"
import { useMutation, useQueryClient} from "@tanstack/react-query"

const API_URL = 'http://productlist-production-33aa.up.railway.app'

const postData = async (data: ProductData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/product', data)
    return response
}
//function useProductDataMutate(): UseMutationResult<AxiosResponse<any, any>, Error, ProductData, unknown>
export function useProductDataMutate(){
    const queryClient = useQueryClient()

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data'])
        }
    })

    return mutate
}