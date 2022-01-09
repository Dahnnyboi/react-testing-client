import { rest } from 'msw';
import urlJoin from 'url-join';
import { API_URL } from 'configs/environment';

const loginHandler = rest.post(
  urlJoin(API_URL, '/auth/login'),
  (req, res, ctx) => {
    const { email } = req.body;

    return res(
      ctx.json({
        data: {
          userId: 'sample-id',
          token: 'sample-token',
          email,
        },
      }),
    );
  },
);

export const loginHandlerException = rest.post(
  urlJoin(API_URL, '/auth/login'),
  (req, res, ctx) =>
    res(
      ctx.status(500),
      ctx.json({ message: 'Deliberately broken request' }),
    ),
);

export const handlers = [loginHandler, loginHandlerException];
