import { rest } from 'msw';

// req: 매칭되는 요청에 대한 정보
// res: 모의 응답을 만들 수 있는 유틸리티
// ctx: 모의 응답의 HTTP 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들
export const handlers = [
    rest.get('/groups', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(albumList));
    }),
];

const albumList = {
    success: true,
    response: {
        albums: [
            {
                id: 1,
                image: '링크',
                albumName: '또 너야 지석진',
                description: '수용이와 석진이의 프라이빗한 공간',
            },
            {
                id: 2,
                image: '링크',
                albumName: '우리 우정 스테이^^',
                description: '이뿌니 6인방 우정 뽀에버',
            },
        ],
    },
    error: null,
};
