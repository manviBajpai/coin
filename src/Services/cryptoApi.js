import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoAPIHeaders = {
    'X-RapidAPI-Key': '3d16671d39mshefac45312ac2dd8p1b96b4jsnb4da2949a358',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  };
  const createRequest=(urls)=>({urls,headers:cryptoAPIHeaders});

  const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
  export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
    }),
          getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
    }),
    }),
});

export const{
    useGetCryptosQuery
}=cryptoApi;
