import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import SideBar from './feature/side-bar/side-bar';

import Exam from './feature/exam/exam';
import NewWord from './feature/new-word/new-word';
import Train from './feature/train/train';

export default function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Router>
                <Routes>
                    <Route path="/" element={<SideBar />}>
                        <Route path="exam" element={<Exam />} />
                        <Route path="train" element={<Train />} />
                        <Route path="word" element={<NewWord />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}
