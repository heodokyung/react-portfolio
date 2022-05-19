import pageStyle from '../../../style/detailView.module.scss';
import ListBtn from '../../../components/views/ListBtn';
import ReactSwiper from '../../../components/views/ReactSwiper';

const WebMiraeStock = () => {
  const imgData = [
    {
      src: `${require('../../../images/detailView/web/img_mirae0.jpg')}`,
      alt: '미래에셋대우 홈페이지 스크린샷1',
    },
    {
      src: `${require('../../../images/detailView/web/img_mirae1.jpg')}`,
      alt: '미래에셋대우 홈페이지 스크린샷2',
    },
    {
      src: `${require('../../../images/detailView/web/img_mirae2.jpg')}`,
      alt: '미래에셋대우 홈페이지 스크린샷3',
    },
    {
      src: `${require('../../../images/detailView/web/img_mirae3.jpg')}`,
      alt: '미래에셋대우 홈페이지 스크린샷4',
    },
  ];

  return (
    <>
      {/* 상세설명 */}
      <ul className={pageStyle.description}>
        <li>
          <strong>기간</strong>: 2016.06.27 ~ 2017.01.06
        </li>
        <li>
          <strong>역할</strong>:
          <ul className={pageStyle.subList}>
            <li>미래에셋대우 메인 퍼블리싱 및 GUI 구현</li>
            <li>미래에셋대우 서브메인 퍼블리싱 및 GUI 구현 </li>
            <li>미래에셋대우 공통 공통 마크업 가이드 배포</li>
            <li>공통 UI 모션 구현</li>
            <li>회사소개 웹 국문/영문 퍼블리싱</li>
            <li>회사소개 모바일 국문/영문 퍼블리싱</li>
          </ul>
        </li>
        <li>
          <strong>고객사</strong>: 미래에셋대우
        </li>
        <li>
          <strong>성과</strong>:
          <ul className={pageStyle.subList}>
            <li>
              미래에셋증권과 미래에셋 대우 사이트 통합으로 보다 나은 서비스 및
              편리한 UI/UX 제공
            </li>
            <li>W3C Markup Validator, 웹 접근성 자동 평가도구(K-wah) 통과</li>
            <li>
              <a
                href="http://wa.or.kr/waMark/status_new.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                미래에셋 대우 웹 접근성 마크 획득
              </a>
            </li>
            <li>
              <a
                href="http://wa.or.kr/waMark/status_new.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                회사소개 국문 웹 접근성 마크 획득
              </a>
            </li>
            <li>
              <a
                href="http://wa.or.kr/waMark/status_new.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                회사소개 영문 웹 접근성 마크 획득
              </a>
            </li>
            <li>익스플로러(ie8~) 및 모던 브라우저 크로스브라우징</li>
            <li>Semantic Markup 퍼블리싱</li>
          </ul>
        </li>
        <li>
          <strong>작업환경</strong>:
          <a
            href="https://www.w3schools.com/html/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            XHTML 1.0 Transitional
          </a>
          ,
          <a
            href="https://www.w3schools.com/css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS3
          </a>
          ,
          <a
            href="https://Jquery.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jquery
          </a>
          ,
          <a
            href="https://www.w3schools.com/js/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javascript
          </a>
          ,
          <a
            href="https://www.photoshop.com/products"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adobe Photoshop
          </a>
        </li>
        <li>
          <a
            href="https://www.miraeassetdaewoo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>사이트 바로가기</strong>: 미래에셋대우
          </a>
        </li>
        <li>
          <a
            href="https://ci.miraeassetdaewoo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>사이트 바로가기</strong>: 미래에셋대우 회사소개 국문
          </a>
        </li>
        <li>
          <a
            href="https://english.miraeassetdaewoo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>사이트 바로가기</strong>: 미래에셋대우 회사소개 영문
          </a>
        </li>
      </ul>

      <ReactSwiper imgData={imgData} />

      <ListBtn />
    </>
  );
};

export default WebMiraeStock;
