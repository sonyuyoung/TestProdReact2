import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

// 카테고리 목록 , 보이는건 한글 값은 영어로 할당
const categories = [
  { name: "libebook", text: "용인시전자책목록 " },
  { name: "busanFood", text: "부산테마먹거리" },
  { name: "busanWalking", text: "부산도보여행" },
];

const CategoriesBlockCss = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;

  background-size: 10%;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoriesCss = styled(NavLink)`
  font-size: 1.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.5rem;

  &:hover {
    color: red;
  }

  // active 클래스 속성 추가.
  // 여기 부분 변경됨, NavLink 방식으로
  &.active {
    font-weight: 600;
    border-bottom: 2px solid violet;
    color: aqua;
    &:hover {
      color: green;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

// const Categories = ({ category, onSelect }) => {
//   return (
//     <CategoriesBlockCss>
//       {categories.map((c) => (
//         <CategoriesCss
//           key={c.name}
//           // NavLink 변경 부분
//           className={({ isActive }) => (isActive ? "active" : undefined)}
//           to={
//             c.name === "libebook"
//               ? "/booksPageTest/libebook"
//               : `/booksPageTest/${c.name}`
//           }
//         >
//           {c.text}
//         </CategoriesCss>
//       ))}
//     </CategoriesBlockCss>
//   );
// };

// export default Categories;
const Categories = ({ category, onSelect }) => {
  return (
    <CategoriesBlockCss>
      {categories.map((c) => (
        <CategoriesCss
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={`/booksPageTest/${c.name}`}
        >
          {c.text}
        </CategoriesCss>
      ))}
    </CategoriesBlockCss>
  );
};

// Set libebook as the default value for the category prop
Categories.defaultProps = {
  category: "libebook",
};

export default Categories;
