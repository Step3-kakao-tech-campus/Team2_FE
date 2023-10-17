import { rest } from 'msw';
import { albumList } from './data/album';
import { rewards } from './data/rewards';
import { titles } from './data/titles';

// req: 매칭되는 요청에 대한 정보
// res: 모의 응답을 만들 수 있는 유틸리티
// ctx: 모의 응답의 HTTP 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들
export const handlers = [
    rest.get('/groups', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumList));
    }),
    rest.get('/rewards', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(rewards));
    }),
    rest.get('/titles', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(titles));
    }),
];


