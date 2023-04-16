import Header from '../components/Header/Header';
import LessonOne from '../components/Contents/Lesson-1/Lesson-1';
import Pager from '../components/Pager/Pager';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Pager />
      <LessonOne />
    </div>
  );
};

export default MainPage;
