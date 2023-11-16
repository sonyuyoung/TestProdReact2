import logo from "./logo.svg";
import "./App.css";
import { Button, Space, DatePicker, version } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainBooks from "./ch14_APItest/component/MainBooks";
import Main from "./component/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/mainBook" element={<MainBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
