import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBook from "./components/SingleBook/SingleBook";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header />} />
        <Route path="/singlebook/:id" element={<SingleBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
