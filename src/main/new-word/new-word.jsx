import { ipcMain } from 'electron';
import fs from 'fs';

// for test
ipcMain.on('test', async (event, args) => {
    event.reply('test', `hello world ${args}`);
});
