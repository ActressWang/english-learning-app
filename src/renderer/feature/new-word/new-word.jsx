import React from 'react';
import { Button } from '@mui/material';

export default function NewWord() {
    const handleClick = async () => {
        window.electron.ipcRenderer.sendMessage('test', ['new-word']);
        window.electron.ipcRenderer.once('test', (arg) => {
            console.log(arg);
        });
    };

    return (
        <div>
            {/* <Button onClick={handleClick}>test</Button> */}
            <Button onClick={handleClick} variant="contained">
                add new word
            </Button>
        </div>
    );
}
