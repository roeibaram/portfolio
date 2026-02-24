import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ResumeDock from "./components/ResumeDock/ResumeDock";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <ResumeDock />
    </div>
  );
}

export default App;
