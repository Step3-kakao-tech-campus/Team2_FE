import { rest } from 'msw';
import { CreateAlbumData } from '../service/album';
import {
    albumInfo,
    albumList,
    canvasExample2,
    albumDetailInfo,
    albumMembers,
    canvasExample3,
} from './data/album';
import { rewards } from './data/rewards';
import { titles, userTitles } from './data/titles';
import {
    userResponse,
    unauthorizedResponse,
    loginResponse,
    logoutResponse,
    userInfoModifiedResponse,
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
    rest.get('/albums/:albumId/pages/:pageId', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(canvasExample3));
    }),
    rest.put('/albums/:albumId/pages/:pageId', (req, res, ctx) => {
        const requestBody = req.body as any;
        canvasExample3.assets = requestBody.assets;
        canvasExample3.shapes = requestBody.shapes;
        canvasExample3.bindings = requestBody.bindings;
        return res(ctx.status(200), ctx.json(SuccessResponse));
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

    rest.get('/albums/:id', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumDetailInfo));
    }),
    rest.get('/users/rewards', (req, res, ctx) => {
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
    rest.get('/albums/:albumId/members', (req, res, ctx) => {
        const { albumId } = req.params;
        return res(ctx.status(200), ctx.json(albumMembers));
    }),
    rest.post('/albums/:albumId/members/join', (req, res, ctx) => {
        const { albumId } = req.params;
        return res(
            ctx.status(200),
            ctx.json({
                success: true,
                response: null,
                error: null,
            }),
        );
    }),
    rest.get('/albums/:albumId/trashes', (req, res, ctx) => {
        const albumId = req.params.albumId;
        // 실제 애플리케이션에서는 albumId를 사용하여 데이터를 필터링할 수 있습니다.
        return res(
            ctx.status(200),
            ctx.json({
                success: true,
                response: {
                    albumId: albumId,
                    pages: [
                        {
                            trashId: 1,
                            image: '/honor.png',
                            deleter: 'tjralsrh',
                            createAt: '2023.09.12',
                            deleteAt: '2023.09.13',
                        },
                        {
                            trashId: 2,
                            image: '/honor.png',
                            deleter: 'tjralsrh',
                            createAt: '2023.09.13',
                            deleteAt: '2023.09.13',
                        },
                    ],
                },
                error: null,
            }),
        );
    }),
    rest.put('/users/:userId/titles/:titleId', (req, res, ctx) => {
        const { userId, titleId } = req.params;
        return res(
            ctx.status(200),
            ctx.json({
                success: true,
                message: `User ${userId} has changed their title to ${titleId}`,
            }),
        );
    }),
    rest.put('/users/:userId', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(userInfoModifiedResponse));
    }),
];

const SuccessResponse = {
    success: true,
    response: null,
    error: null,
};
