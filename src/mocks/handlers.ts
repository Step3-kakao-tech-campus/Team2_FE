import { rest } from 'msw';
import { CreateAlbumData } from '../service/album';
import {
    albumInfo,
    albumList,
    canvasExample2,
    albumDetailInfo,
} from './data/album';
import { rewards } from './data/rewards';
import { titles } from './data/titles';
import {
    userResponse,
    unauthorizedResponse,
    loginResponse,
    logoutResponse,
} from './data/user';

// req: 매칭되는 요청에 대한 정보
// res: 모의 응답을 만들 수 있는 유틸리티
// ctx: 모의 응답의 HTTP 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들
export const handlers = [
    rest.get('/api/groups', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumList));
    }),
    rest.get('/api/album-info', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumInfo));
    }),
    rest.get('/api/albums/1/pages/1', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(canvasExample2));
    }),
    rest.get('/api/rewards', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(rewards));
    }),
    rest.get('/api/titles', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(titles));
    }),
    rest.post('/api/auth/kakao/login', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(loginResponse));
    }),
    rest.get('/api/user', (req, res, ctx) => {
        if (req.headers.get('Authorization') === 'Bearer token') {
            return res(ctx.status(200), ctx.json(userResponse));
        } else {
            return res(ctx.status(401), ctx.json(unauthorizedResponse));
        }
    }),
    rest.post('/api/auth/logout', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(logoutResponse));
    }),

    rest.get('/api/albums/1', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumDetailInfo));
    }),
    rest.post<CreateAlbumData>('/api/albums/creation', (req, res, ctx) => {
        const { albumName } = req.body as CreateAlbumData;
        return res(
            ctx.status(200), // 성공 상태 코드
            ctx.json({
                success: true,
                response: {
                    albumId: '123',
                    albumName: albumName,
                },
                error: null,
            }),
        );
    }),
    rest.post('/api/albums/:albumId/members/join', (req, res, ctx) => {
        const { albumId } = req.params;
        const authToken = req.headers.get('Authorization');
        return res(
            ctx.status(200),
            ctx.json({
                success: true,
                response: null,
                error: null,
            }),
        );
    }),
];
