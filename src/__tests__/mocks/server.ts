import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers';
import { Headers, Request, Response, fetch } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export default server;
