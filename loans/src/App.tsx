import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Loans from "./pages/loans";

const App = () => (
 <>
 <Loans />
 </>
);
ReactDOM.render(<App />, document.getElementById("app"));
