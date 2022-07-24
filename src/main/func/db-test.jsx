import { ipcMain } from 'electron';
import sq3 from 'sqlite3';

// import { docDir } from './settings';
// 将数据存至系统用户目录，防止用户误删程序
const sqlite3 = sq3.verbose();
const db = new sqlite3.Database('db/db-test.db');
// 初始化
export default db;

ipcMain.on('dbTest', async (event, args) => {
    db.all('select * from T_PERSON ', function(err, res ){
        if (!err) {
            event.reply('dbTestReturn', `${JSON.stringify(res)}`);
        } else {
            console.log(err);
        }
    });
});
