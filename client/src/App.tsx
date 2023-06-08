import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dbbnsazda/image/upload/v1686233143/qve9r40lwfz1nx3pdlcn.png"
            alt="logo"
            className="w-10 object-contain"
          />
        </Link>
        <Link to="/create-post" className="text-white bg-indigo-500 py-4 px-4">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-4 w-full bg-gray-100 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
