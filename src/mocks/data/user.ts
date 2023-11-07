export const userResponse = {
    success: true,
    response: {
        id: 1,
        nickname: '수용이',
        email: 'rhalstjr1999@naver.com',
        titles: [
            {
                titleId: 1,
                titleName: '네컷 인플루언서',
            },
            {
                titleId: 2,
                titleName: '네컷 아싸',
            },
        ],
    },
    error: null,
};

export const unauthorizedResponse = {
    success: false,
    response: null,
    error: {
        message: 'Unauthorized',
    },
};

export const loginResponse = {
    success: true,
    response: 'Bearer token',
    error: null,
};

export const logoutResponse = {
    success: true,
    response: null,
    error: null,
};
