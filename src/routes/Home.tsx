// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainProjectList from '../components/main/MainProjectList';
import MainVisual from '../components/main/MainVisual';
import MainSkillList from './../components/main/MainSkilltList';
import MainWorkList from './../components/main/MainWorktList';
import MainAboutList from './../components/main/MainAboutList';

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Portfolio Main</title>
        </Helmet>
      </HelmetProvider>
      {/* Main Visual */}
      <MainVisual />
      {/* 프로젝트 List */}
      <MainProjectList />
      {/* 스킬 List */}
      <MainSkillList />
      {/* 회사 경력 List */}
      <MainWorkList />
      {/* 그 외 기타 List */}
      <MainAboutList />
    </>
  );
}

export default Home;
