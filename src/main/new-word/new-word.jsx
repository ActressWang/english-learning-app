import { ipcMain } from 'electron';
import fs from 'fs';

ipcMain.on('addWord', async (event, args) => {
    event.reply('addWord', `hello world ${args}`);
});
