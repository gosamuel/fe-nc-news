import { createContext, useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Articles from "./Articles";
import Home from "./Home";
import { Routes, Route, useParams } from "react-router-dom";
import ArticlePage from "./ArticlePage";

export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <div className="app">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
