import styled from "styled-components";

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

      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;
const BooksItems = ({ article }) => {
  const { ebk_nm, gnr, pblsh_ymd, cn_intro } = article;
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
