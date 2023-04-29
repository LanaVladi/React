import { rest } from 'msw';
import { mockResponse } from './mockResponse';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/*', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
];
