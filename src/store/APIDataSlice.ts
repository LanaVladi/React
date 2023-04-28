import { CardType } from '../types';
import { baseUrl } from '../constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type APIResponse = {
  info: {
    count: number;
    next: string;
    pages: string | null;
    prev: string | null;
  };
  results: CardType[];
};

export const APIDataSlice = createApi({
  reducerPath: 'APIData',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getDataByName: builder.query<APIResponse, string>({
      query: (name: string) => ({ url: `/character/`, params: { name: name } }),
    }),
    getDataById: builder.query<CardType, number>({
      query: (id: number) => ({ url: `/character/`, params: { id: id } }),
    }),
  }),
});

export const { useGetDataByNameQuery, useGetDataByIdQuery } = APIDataSlice;
