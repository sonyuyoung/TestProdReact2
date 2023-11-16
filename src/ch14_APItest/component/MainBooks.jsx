import BookList from "./BookList";
import Categories from "./Categories";
import React, { useCallback, useState } from "react";

const MainBooks = () => {
  const [category, setCategory] = useState("libebook");
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <BookList category={category} />
    </div>
  );
};

export default MainBooks;
