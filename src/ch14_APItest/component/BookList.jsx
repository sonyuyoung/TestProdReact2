import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BooksItems from "../model/BooksItems";

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

    resultData();
  }, []);

  if (loading) {
    return <BookListCss>데이터 받는중(대기중 ....)</BookListCss>;
  }

  if (!items) {
    return null;
  }

  return (
    <BookListCss>
      {items.map((item) => (
        <BooksItems key={item.no} item={item} />
      ))}
    </BookListCss>
  );
};

export default BookList;
