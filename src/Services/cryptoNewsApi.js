import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders={
    'X-BingApis-SDK': 'true',
     'X-RapidAPI-Key': '3d16671d39mshefac45312ac2dd8p1b96b4jsnb4da2949a358',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const baseUrl ='https://bing-news-search1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoApiHeaders});
export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>(
        {
            getCryptoNews:builder.query({
                query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFprmat=Raw&freshness=Day&count=${count}`),
            })
        }
    )
});
export const{
     useGetCryptoNewsQuery}=cryptoNewsApi;


