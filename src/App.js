import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import GlobalStyle from "./Global";
import Article from "./components/Article";
import Landing from "./components/Landing.jsx";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Route path="/" exact component={Landing} />
      <Route path="/articles/:id" exact component={Article} />
    </HashRouter>
  );
}

export default App;
