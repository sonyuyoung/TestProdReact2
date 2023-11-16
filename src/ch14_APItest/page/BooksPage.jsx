import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../component/Categories";

import BookList from "../component/BookList";

const BooksPage = () => {
  // 라우팅에서 경로 뒤에 /:category , 링크 뒤에 파라미터를 속성 설정
  // useParams(); 훅스 이용해서, :category 값을 가져오기.
  // 스프링 부트 , @Pathvariable 비슷함.
  const params = useParams();
  // 카테고리 기본값 : all, 나머지는 선택된 카테고리 값으로 사용.
  const category = params.category || "libebook";
  return (
    <div>
      <Categories />
      <BookList category={category} />
    </div>
  );
};

export default BooksPage;
