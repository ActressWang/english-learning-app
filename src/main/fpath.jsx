import path from 'path';

import { app } from 'electron';

const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

const getAssetPath = (...paths) => {
    return path.join(RESOURCES_PATH, ...paths);
};

const fpath = getAssetPath('file/word.txt');

export default fpath;
