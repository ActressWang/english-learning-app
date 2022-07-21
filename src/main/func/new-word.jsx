import { ipcMain } from 'electron';
import fs from 'fs';
import fpath from '../getFpath';

const handleAddWord = (args) => {
    fs.readFile(fpath, 'utf8', (readErr, res) => {
        if (readErr) throw readErr;

        fs.writeFile(fpath, res + args, (writeErr) => {
            if (writeErr) throw writeErr;
            console.log('The file has been saved!');
        });
    });
};

ipcMain.on('addWord', async (event, args) => {
    handleAddWord(args);
    event.reply('addWord', `${args}`);
});
