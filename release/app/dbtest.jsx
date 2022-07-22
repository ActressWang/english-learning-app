import sq3 from 'sqlite3';
import path from 'path';
import { app } from 'electron';

const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../../assets');

const sqlite3 = sq3.verbose();
const db = new sqlite3.Database(RESOURCES_PATH);
// 初始化
db.serialize(() => {
    db.run('create table test(name varchar(15))', function () {
        db.run("insert into test values('hello,word')", function () {
            db.all('select * from test', function (err, res) {
                if (!err) {
                    console.log(JSON.stringify(res));
                } else {
                    console.log(err);
                }
            });
        });
    });
});
export default db;
