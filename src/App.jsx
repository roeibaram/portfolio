import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ResumeDock from "./components/ResumeDock/ResumeDock";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`page ${isLoaded ? "page-ready" : ""}`}>
      <a className="page__skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <Main />
      <Footer />
      <ResumeDock />
    </div>
  );
}

export default App;
