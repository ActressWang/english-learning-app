import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { RecoilRoot } from 'recoil';
import { mainTheme } from './theme/theme';

import MiniDrawer from './feature/side-bar/side-bar';
import Exam from './feature/exam/exam';
import NewWord from './feature/new-word/new-word';
import Train from './feature/train/train';
import Setting from './feature/setting/setting';

export default function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={mainTheme}>
                <div style={{ width: '100vw', height: '100vh' }}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<MiniDrawer />}>
                                <Route path="exam" element={<Exam />} />
                                <Route path="train" element={<Train />} />
                                <Route path="setting" element={<Setting />} />
                                <Route path="/" element={<NewWord />} />
                            </Route>
                        </Routes>
                    </Router>
                </div>
            </ThemeProvider>
        </RecoilRoot>
    );
}
