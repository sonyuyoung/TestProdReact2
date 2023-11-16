import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BooksItems from "../model/BooksItems";
// 아이템요소를 출력을 감싸는 목록부분

const BookListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// 더미 데이터
const sampleItems = {
  ebk_nm: "영미에세이",
  gnr: "곰돌이 푸; 서두르지 않아도 괜찮아",
  pblsh_ymd: "2018-05-08",
  cn_intro:
    "디즈니의 사랑스러운 푸가 전하는 삶의 여유!『곰돌이 푸; 서두르지 않아도 괜찮아』는 꾸밈없이 순수하고 진실한 마음으로 세상을 바라보고 생각하며; 서두르는 법이 없이 늘 여유로운 미소를 짓고 느릿느릿한 몸짓으로 숲속을 거니는 곰돌이 푸의 메시지와 삽화를 엮은 책이다. 오늘날을 살아가는 우리에게 의미 있는 지혜를 담은 푸의 이야기와 함께 삶의 방식에 관한 오래된 경전인 《논어》의 혜안을 담았다.적당한 손해를 감수하더라도 내가 가진 소중한 것을 잃지 않겠다는 일관성 있는 삶의 태도로 살아가는 것. 그것이 겉으로 보기에 영리해 보이지는 않지만 푸의 일이 결국엔 잘되는 이유다. 무심코 스쳐 지나갈 수 있는 바쁜 일상 속에서 “걱정 마. 언젠가는 목적지에 도착할 수 있을 거야. 다만 나를 잃지만 않으면 돼”라고 응원하는 푸의 따뜻하고 진심어린 목소리를 통해 삶을 잠시 돌아볼 여유를 갖고; 빠르지도 느리지도 않은 속도로 오늘을 살아갈 수 있을 것이다",
};

const BookList = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=qSik2aAqQQwmtaBrNnMavyWzinL%2FEYuIs7t21P%2BmrSAazkprKuKHvm%2BtI8n389pMlbMHGYx6PjivrdAWBAqC%2FQ%3D%3D&pageNo=3&numOfRows=10"
        );
        setItems(response.data.items);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    // Call the async function
    resultData();
  }, []);

  // 주의사항, 데이터 널 체크하기.
  if (loading) {
    return <BookListCss>데이터 받는중(대기중 ....)</BookListCss>;
  }

  // 데이터를 못받아 왔을 경우, 화면에 아무것도 안그리기.
  if (!items) {
    return null;
  }

  return (
    <BookListCss>
      {/* <BooksItems items={sampleItems}></BooksItems>
      <BooksItems items={sampleItems}></BooksItems>
      <BooksItems items={sampleItems}></BooksItems>
      <BooksItems items={sampleItems}></BooksItems> */}

      {items.map((item) => (
        <BooksItems key={item.no} item={item} />
      ))}
    </BookListCss>
  );
};

export default BookList;
