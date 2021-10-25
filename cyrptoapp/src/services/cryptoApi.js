import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host' : 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key' : '936e6cfc13mshdc7c41ee094e07ap1c9e71jsne7a7ed22bded'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos : builder.query({
            query :() =>createRequest('/coins') 
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;