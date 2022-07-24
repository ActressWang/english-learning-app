import React from 'react';
import {
    Button,
    Paper,
    TextField,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        flex: 1,
        padding: '1rem',
        margin: theme.spacing(1),
    },
    form: {
        display: 'flex',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& .MuiButton-root': {
            margin: theme.spacing(2),
        },
    },
}));

export default function NewWord() {
    const classes = useStyles();
    const [newWord, setNewWord] = React.useState('');
    const [Lib, setLib] = React.useState('');

    const handleClick = async () => {
        window.electron.ipcRenderer.sendMessage('test', ['new-word']);
        window.electron.ipcRenderer.once('test', (arg) => {
            console.log(arg);
        });
    };

    const handleWordChange = (event) => {
        // todo: 验证
        setNewWord(event.target.value);
    };

    const handleLibChange = (event) => {};

    // todo: 无键盘化
    const handleAddWord = () => {
        window.electron.ipcRenderer.sendMessage('addWord', newWord);
        // window.electron.ipcRenderer.once('addWord', (arg) => {
        //     console.log(arg);
        // });
    };

    const handleTranslate = () => {};


    // todo: 无键盘化
    const dbtest = () => {
        window.electron.ipcRenderer.sendMessage('dbTest', null);
        window.electron.ipcRenderer.once('dbTestReturn', (arg) => {
            alert(arg);
        });
    };

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={classes.form}>
                    <TextField
                        multiline
                        id="standard-read-only-input"
                        label="新单词"
                        value={newWord}
                        size="small"
                        variant="standard"
                        onChange={handleWordChange}
                    />
                    <Button
                        onClick={handleAddWord}
                        variant="contained"
                        size="small"
                    >
                        添加
                    </Button>
                    <Button
                        onClick={handleTranslate}
                        variant="contained"
                        size="small"
                    >
                        查看释义
                    </Button>
                </div>
                <div>
                    <FormControl fullWidth>
                        <InputLabel
                            variant="standard"
                            htmlFor="uncontrolled-native"
                        >
                            单词库
                        </InputLabel>
                        <Select
                            variant="standard"
                            onChange={handleLibChange}
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <MenuItem value={10}>雅思</MenuItem>
                            <MenuItem value={20}>单词库1</MenuItem>
                            <MenuItem value={30}>单词库2</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className={classes.form}>
                <Paper className={classes.paper}>区域1</Paper>
                <Paper className={classes.paper}>区域2</Paper>
            </div>
            <div className={classes.form}>
                <Paper className={classes.paper}>DBTest</Paper>
                <Button
                    onClick={dbtest}
                    variant="contained"
                    size="small"
                >
                    测试数据库查询
                </Button>
            </div>
        </div>
    );
}
