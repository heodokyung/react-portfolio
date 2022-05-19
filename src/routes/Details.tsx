import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AsideMenu from '../components/views/AsideMenu';
import MobileHanaApp from '../pages/detail/mobile/MobileHanaApp';
import MobileHan from '../pages/detail/mobile/MobileHan';
import MobileTgifKor from '../pages/detail/mobile/MobileTgifKor';
import MobileTgifEng from '../pages/detail/mobile/MobileTgifEng';
import MobileAngelKor from '../pages/detail/mobile/MobileAngelKor';
import MobileAngelEng from '../pages/detail/mobile/MobileAngelEng';
import MobileLotteriaKor from '../pages/detail/mobile/MobileLotteriaKor';
import MobileNatuurKor from '../pages/detail/mobile/MobileNatuurKor';
import MobileKrispyKor from '../pages/detail/mobile/MobileKrispyKor';
import MobileAdcapsule from '../pages/detail/mobile/MobileAdcapsule';
import MobileKloudbeer from '../pages/detail/mobile/MobileKloudbeer';
import MobileLottemembers from '../pages/detail/mobile/MobileLottemembers';
import WebFinnqV3 from '../pages/detail/web/WebFinnqV3';
import WebFinnqV2 from '../pages/detail/web/WebFinnqV2';
import WebKebhanaOpen from '../pages/detail/web/WebKebhanaOpen';
import WebKebhanaCompanyV2 from '../pages/detail/web/WebKebhanaCompanyV2';
import WebKebhanaCombine from '../pages/detail/web/WebKebhanaCombine';
import WebKebhanaCompany from '../pages/detail/web/WebKebhanaCompany';
import WebMiraeStock from '../pages/detail/web/WebMiraeStock';
import WebKebhana from '../pages/detail/web/WebKebhana';
import WebHan from '../pages/detail/web/WebHan';
import WebBenecol from '../pages/detail/web/WebBenecol';
import WebSamsungStock from '../pages/detail/web/WebSamsungStock';
import WebNamdongKor from '../pages/detail/web/WebNamdongKor';
import WebNamdongEng from '../pages/detail/web/WebNamdongEng';
import WebLottemembers from '../pages/detail/web/WebLottemembers';
import WebDovol from '../pages/detail/web/WebDovol';
import WebMofat from '../pages/detail/web/WebMofat';
import WebRamada from '../pages/detail/web/WebRamada';
import WebPortfolioV2 from '../pages/detail/web/WebPortfolioV2';
import CommonTitle from '../components/common/CommonTitle';
import Progress from '../components/views/Progress';
import MobileFinnqAppV2 from '../pages/detail/mobile/MobileFinnqAppV2';

const DetailsViewWrap = styled.article`
  width: 1160px;
  margin: 34px auto 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 0 24px;
  }
`;

const DetailsView = styled.article`
  width: 880px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

interface ICustomizedState {
  viewId: string;
  helmeTitle: string;
  persent: number;
}

function Details() {
  const location = useLocation();
  const state = location.state as ICustomizedState;

  // 구조분해
  const { viewId, helmeTitle, persent } = state;
  const projectTitle = helmeTitle.replace('<br />', ' ');

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{projectTitle}</title>
        </Helmet>
      </HelmetProvider>
      <DetailsViewWrap>
        <AsideMenu />
        <DetailsView>
          {/* 제목 */}
          <CommonTitle title={projectTitle} />

          {/* 참여율 */}
          <Progress persent={persent} />

          {/* MOBILE 프로젝트 */}
          {viewId === 'm_finnq_app_v2' && <MobileFinnqAppV2 />}
          {viewId === 'm_hana_app' && <MobileHanaApp />}
          {viewId === 'm_han' && <MobileHan />}
          {viewId === 'm_tgif' && <MobileTgifKor />}
          {viewId === 'm_tgif_e' && <MobileTgifEng />}
          {viewId === 'm_angel' && <MobileAngelKor />}
          {viewId === 'm_angel_e' && <MobileAngelEng />}
          {viewId === 'm_lotteria' && <MobileLotteriaKor />}
          {viewId === 'm_natuur' && <MobileNatuurKor />}
          {viewId === 'm_krispy' && <MobileKrispyKor />}
          {viewId === 'm_adcap' && <MobileAdcapsule />}
          {viewId === 'm_kloudbeer' && <MobileKloudbeer />}
          {viewId === 'm_lotte' && <MobileLottemembers />}

          {/* WEB 프로젝트 */}
          {viewId === 'w_portfolio_v2' && <WebPortfolioV2 />}
          {viewId === 'w_finnq_v3' && <WebFinnqV3 />}
          {viewId === 'w_finnq_v2' && <WebFinnqV2 />}
          {viewId === 'w_kebhana_open' && <WebKebhanaOpen />}
          {viewId === 'w_kebhana_company2' && <WebKebhanaCompanyV2 />}
          {viewId === 'w_kebhana_combine' && <WebKebhanaCombine />}
          {viewId === 'w_kebhana_company' && <WebKebhanaCompany />}
          {viewId === 'w_mirae' && <WebMiraeStock />}
          {viewId === 'w_kebhana' && <WebKebhana />}
          {viewId === 'w_han' && <WebHan />}
          {viewId === 'w_benecol' && <WebBenecol />}
          {viewId === 'w_samsung' && <WebSamsungStock />}
          {viewId === 'w_namdong_k' && <WebNamdongKor />}
          {viewId === 'w_namdong_e' && <WebNamdongEng />}
          {viewId === 'w_lotte' && <WebLottemembers />}
          {viewId === 'w_dovol' && <WebDovol />}
          {viewId === 'w_mofat' && <WebMofat />}
          {viewId === 'w_ramada' && <WebRamada />}
        </DetailsView>
      </DetailsViewWrap>
    </>
  );
}

export default Details;
