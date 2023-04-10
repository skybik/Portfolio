import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
