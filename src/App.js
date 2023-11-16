import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBooks from "./ch14_APItest/component/MainBooks";
import Main from "./component/Main";
import BooksPage from "./ch14_APItest/page/BooksPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          {/* <Route path="/mainBook" element={<MainBooks />} /> */}
          <Route path="booksPageTest/:category" element={<BooksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
