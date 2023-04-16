import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LessonTwoPage from './pages/LessonTwoPage';
import LessonThreePage from './pages/LessonThreePage';
import LessonFourPage from './pages/LessonFourPage';
import LessonFivePage from './pages/LessonFivePage';
import LessonSixPage from './pages/LessonSixPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="lesson-2" element={<LessonTwoPage />} />
        <Route path="lesson-3" element={<LessonThreePage />} />
        <Route path="lesson-4" element={<LessonFourPage />} />
        <Route path="lesson-5" element={<LessonFivePage />} />
        <Route path="lesson-6" element={<LessonSixPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
