// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainVisual from '../components/main/MainVisual';
import MainProjectList from '../container/MainProjectList';
import MainSkillList from './../container/MainSkilltList';
import MainWorkList from './../container/MainWorktList';
import MainAboutList from '../container/MainAboutList';
import styled from 'styled-components';

const Content = styled.section`
	max-width: 1920px;
	margin: 0 auto;
`;

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

			<Content>
				{/* 프로젝트 List */}
				<MainProjectList />
				{/* 스킬 List */}
				<MainSkillList />
				{/* 회사 경력 List */}
				<MainWorkList />
				{/* 그 외 기타 List */}
				<MainAboutList />
			</Content>
		</>
	);
}

export default Home;
