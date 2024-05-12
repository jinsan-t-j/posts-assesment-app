import type { AxiosResponse, RawAxiosRequestHeaders } from 'axios'
import axios from 'axios'

import type { AppThunk } from '../../store'

interface IRequestOptions {
    url: string
    method: string
}

/**
 * The application common HTTP request handler.
 *
 * @param requestOptions - The axios request options.
 * @returns The HTTP response.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestHandler = <T>({
    url,
    method = 'GET',
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
IRequestOptions): AppThunk<Promise<AxiosResponse<T, any>['data']>> => {
    return async () => {
        try {
            const headers: RawAxiosRequestHeaders = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
            const response = await axios.request({
                baseURL: import.meta.env.VITE_API_URL,
                url,
                method,
                headers,
            })

            return response.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            return err.response?.data
        }
    }
}
