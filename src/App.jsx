import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Skills from './pages/Skills';
import Motivation from './pages/Motivation';
import ScienceModule from './pages/ScienceModule';
import LessonViewer from './pages/LessonViewer';
import MathModule from './pages/MathModule';
import MathLessonViewer from './pages/MathLessonViewer';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
        <Header />

        <main style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/science" element={<ScienceModule />} />
            <Route path="/lessons/science/lesson/:lessonId" element={<LessonViewer />} />
            <Route path="/lessons/mathematics" element={<MathModule />} />
            <Route path="/lessons/mathematics/lesson/:lessonId" element={<MathLessonViewer />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/motivation" element={<Motivation />} />
          </Routes>
        </main>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
};

export default App;
