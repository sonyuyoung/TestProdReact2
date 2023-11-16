// Main 임시 페이지
import React from "react";
// yarn add react-router-dom
// npm install react-router-dom
// 라우팅 모듈 , 도구 설치.
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import { Component } from "react";

// styled-component,  컴포넌트에서 좀더 편하게 css  작업하는 모듈.
// yarn add styled-components
// npm install styled-components
// 확장팩: styled-components
// 설치후 모듈가져와서 사용하기

// styled-components 사용해보기
// 예제 styled.원하는 태그선택 `(백틱) '백틱 열고 닫고
// 이사이에css 적용
//백틱 옵션+물결`
const MainTitleTextCss = styled.p`
  font-size: 30px;
  background-color: pink;
  font-family: "NexonLv1Gothic";
`;
const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  background-color: red;
  text-align: center;
`;
//Wrapper 라고 해서 블록 부분 설정.
const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

// Container 만들기.
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-left: 20px;
  // & : 현재 태그
  // div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고
  // 각 요소의 마진 바텀을 16 px 씩 간격을 주겠다.
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  // useNavigate 라는 훅스를 이용해서, 페이징 하기..
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <h1>메인 화면입니다.</h1>
        {/* css 적용하기 */}
      </div>
      <Container>
        <br></br>
        <Button
          title="mainBook 테스트 "
          type="primary"
          onClick={() => {
            navigate("/mainBook");
          }}
        >
          mainBook 확인
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Main;
