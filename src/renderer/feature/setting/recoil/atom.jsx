import { atom } from 'recoil';

export const rootFilePath = atom({
    key: 'filePathofWords',
    default: `C:\\Users\\Admini\\Desktop\\learn-english-file`,
});

export const filePathofArticles = atom({
    key: 'filePathofArticles',
    default: `C:\\Users\\Admini\\Desktop\\learn-english-file`,
});
