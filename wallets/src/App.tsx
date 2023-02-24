import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
   <Navbar />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
