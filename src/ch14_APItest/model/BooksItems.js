// "resultCode": 0,
// "resultMsg": "NORMAL_CODE",
// "numOfRows": 10,
// "pageNo": 3,
// "totalCount": 11842,
// "items": [
//   {
//     "no": 20,
//     "gnr": "영미에세이",
//     "ebk_nm": "곰돌이 푸; 서두르지 않아도 괜찮아",
//     "aut_nm": "곰돌이 푸 (원작)",
//     "pblshr": "알에이치코리아",
//     "pblsh_ymd": "2018-05-08",
//     "loan_avlbl_yn": "N",
//     "rsvt_noppl": 3,
//     "avlbl_envrmt": "PC; 스마트폰; 태블릿",
//     "cn_intro": "디즈니의 사랑스러운 푸가 전하는 삶의 여유!『곰돌이 푸; 서두르지 않아도 괜찮아』는 꾸밈없이 순수하고 진실한 마음으로 세상을 바라보고 생각하며; 서두르는 법이 없이 늘 여유로운 미소를 짓고 느릿느릿한 몸짓으로 숲속을 거니는 곰돌이 푸의 메시지와 삽화를 엮은 책이다. 오늘날을 살아가는 우리에게 의미 있는 지혜를 담은 푸의 이야기와 함께 삶의 방식에 관한 오래된 경전인 《논어》의 혜안을 담았다.적당한 손해를 감수하더라도 내가 가진 소중한 것을 잃지 않겠다는 일관성 있는 삶의 태도로 살아가는 것. 그것이 겉으로 보기에 영리해 보이지는 않지만 푸의 일이 결국엔 잘되는 이유다. 무심코 스쳐 지나갈 수 있는 바쁜 일상 속에서 “걱정 마. 언젠가는 목적지에 도착할 수 있을 거야. 다만 나를 잃지만 않으면 돼”라고 응원하는 푸의 따뜻하고 진심어린 목소리를 통해 삶을 잠시 돌아볼 여유를 갖고; 빠르지도 느리지도 않은 속도로 오늘을 살아갈 수 있을 것이다.",
// 이벤트 핸들러 await는 promise를 반환하는 함수 앞에 사용 ()
/// gnr,ebk_nm,pblsh_ymd,cn_intro

import styled from "styled-components";
import React, { Component } from "react";

const BooksItemCss = styled.div`
  display: flex;
  //이미지 thumnail
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
const BooksItems = ({ item }) => {
  const { ebk_nm, gnr, pblsh_ymd, cn_intro } = item;
  return (
    <div>
      <BooksItemCss>
        <div className="contents">
          <h2>{ebk_nm}</h2>
          <p>장르: {gnr}</p>
          <p>출판일: {pblsh_ymd}</p>
          <p>도서 소개: {cn_intro}</p>
        </div>
      </BooksItemCss>
    </div>
  );
};

export default BooksItems;
