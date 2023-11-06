import { rest } from 'msw';
import { albumInfo, albumList, canvasExample2 } from './data/album';
import { rewards } from './data/rewards';
import { titles } from './data/titles';
import { loginResponse, unauthorizedResponse, userResponse } from './data/user';

// req: 매칭되는 요청에 대한 정보
// res: 모의 응답을 만들 수 있는 유틸리티
// ctx: 모의 응답의 HTTP 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들
export const handlers = [
    rest.get('/groups', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumList));
    }),
    rest.get('/album-info', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumInfo));
    }),
    rest.get('/canvas', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(canvasExample2));
    }),
    rest.get('/rewards', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(rewards));
    }),
    rest.get('/titles', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(titles));
    }),
    rest.get('/auth/login/kakao', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(loginResponse));
    }),
    rest.get('/user', (req, res, ctx) => {
        if (req.headers.get('Authorization') === 'Bearer token') {
            return res(ctx.status(200), ctx.json(userResponse));
        } else {
            return res(ctx.status(401), ctx.json(unauthorizedResponse));
        }
    }),
];
