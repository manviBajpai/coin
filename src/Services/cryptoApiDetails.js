import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoAPIHeaders = {

};
const createRequest = (urls) => ({ urls, headers: cryptoAPIHeaders });

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
export const cryptoApiDetails = createApi({
  reducerPath: 'cryptoApiDetails',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const {
  useGetCryptoDetailsQuery
} = cryptoApiDetails;
