import { atom } from 'recoil';

export interface User {
    id: number;
    nickname: string;
    email: string;
    titles: UserTitle[];
}

export interface UserTitle {
    //칭호
    titleId: number;
    titleName: string;
}

export const userState = atom<User | null>({
    key: 'userState',
    default: null,
});
