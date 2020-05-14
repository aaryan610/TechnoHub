import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import { StepsDetails, StepsTerms, StepsTest } from "./components/Steps.js";
import Details from "./components/Details.js";
import Terms from "./components/Terms.js";
import Test from "./components/Test.js";
import "./components/css/style.css";
import "./components/css/style-responsive.css";

function App() {
  return (
    <div>
      <Header />
      <StepsDetails />
      <Details />
      <StepsTerms />
      <Terms />
      <StepsTest />
      <Test />
    </div>
  );
}

export default App;
