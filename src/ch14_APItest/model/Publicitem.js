import React from "react";
// 부산 테마 먹거리요소로 구성
// 기존 css 재사용
// 가지고올 데이터부분 변경
import styled from "styled-components";
// css 작업 대상
// 1)이미지 2)콘텐츠 내용
const NewsItemCss = styled.div`
  display: flex;
  //이미지 thumnail
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 300px;
      height: 250px;
      // 해당사이즈에 맞게 이미지 크기 조정
      object-fit: cover;
    }
  }
  .contents {
    text-align: left;
    margin-top: 0px;
    h2 {
      margin: 0;
      a {
        color: blue;
      }
    }
    p {
      margin: 0;
      line-height: 1.5rem;
      margin-top: 0.5rem;
      // 텍스트나 내용이 일반적인 공백과 줄바꿈 규칙을따름
      // 브라우저의 너비에따라 자동 줄바꿈됨
      white-space: normal;
    }
  }
  /* 
&:현재요소
&+& : 형제 연산자 , 요소의 이웃, 같은 요소 나열시 
*/
  & + & {
    margin-top: 3rem;
  }
`;

// MAIN_TITLE, CNTCT_TEL, MAIN_IMG_THUMB, ADDR1, RPRSNTV_MENU;
const Publicitem = ({ article }) => {
  // article : 각기사를 담은 객체 ,
  // 비구조화 할당으로 각 할당
  // urlToImage 존개가한다면   {urlToImage && (
  const { MAIN_TITLE, CNTCT_TEL, MAIN_IMG_THUMB, ADDR1, RPRSNTV_MENU } =
    article;
  return (
    <NewsItemCss>
      {/* 조건부 렌더링으로 출력하기.  */}
      {/* 이미지없다면 이부분 없음  */}
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          {/* 링크 클릭시, target="_blank" : 새창 으로 열기 
          rel="noopener noreferrer" : 새창으로 열었을 때, 
          원본 링크의 참조라든지, 개인 정보 부분을 막아주기. */}
          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>{MAIN_TITLE} </h2>
        <p>전화번호 : {CNTCT_TEL}</p>
        <p>주소 : {ADDR1}</p>
        <p>메뉴 : {RPRSNTV_MENU}</p>
      </div>
    </NewsItemCss>
  );
};

export default Publicitem;
