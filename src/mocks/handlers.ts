import { rest } from 'msw';
import { CreateAlbumData } from '../service/album';
import {
    albumInfo,
    albumList,
    canvasExample2,
    albumDetailInfo,
} from './data/album';
import { rewards } from './data/rewards';
import { titles, userTitles } from './data/titles';
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
    rest.post('/auth/kakao/login', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(loginResponse));
    }),
    rest.get('/user', (req, res, ctx) => {
        if (req.headers.get('Authorization') === 'Bearer token') {
            return res(ctx.status(200), ctx.json(userResponse));
        } else {
            return res(ctx.status(401), ctx.json(unauthorizedResponse));
        }
    }),
    rest.post('/auth/logout', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(logoutResponse));
    }),

    rest.get('/albums/1', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumDetailInfo));
    }),
    rest.get('/users/:userId/rewards', (req, res, ctx) => {
        const { userId } = req.params;
    
        return res(ctx.status(200), ctx.json(userTitles));
    }),
    rest.post<CreateAlbumData>('/albums/creation', (req, res, ctx) => {
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
    rest.post('/albums/:albumId/members/join', (req, res, ctx) => {
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
    rest.put('/users/:userId/titles/:titleId', (req, res, ctx) => {
        const { userId, titleId } = req.params;
        const authToken = req.headers.get('Authorization');
        return res(
          ctx.status(200),
          ctx.json({
            success: true,
            message: `User ${userId} has changed their title to ${titleId}`,
          }),
        );
      }),
];
