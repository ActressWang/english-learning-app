import * as React from 'react';
import { useRecoilState } from 'recoil';
import {
    TextField,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { rootFilePath } from './recoil/atom';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
        '& .MuiButton-root': {
            margin: theme.spacing(2),
        },
    },
}));

export default function Setting() {
    const classes = useStyles();
    const [filePath, setFilePath] = useRecoilState(rootFilePath);
    const handleOpenFile = () => {};

    return (
        <fragment>
            <Accordion expanded>
                <AccordionSummary>
                    Path to save your English words
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.form}>
                        <TextField
                            multiline
                            id="standard-read-only-input"
                            label="File Path"
                            value={filePath}
                            variant="filled"
                            size="small"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <Button
                            onClick={handleOpenFile}
                            variant="contained"
                            size="small"
                        >
                            open file
                        </Button>
                        <Button
                            onClick={handleOpenFile}
                            variant="contained"
                            size="small"
                        >
                            reset path
                        </Button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </fragment>
    );
}
