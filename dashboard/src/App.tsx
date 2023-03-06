import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "payments/Header";
import Navbar from "wallets/Navbar";
import "./index.scss";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Root from "./pages/root";
import Customers from "./pages/customers";
import Layout from "./components/Layout";
import Table from "customers/Table";
import Loans from "loans/Loans"
import Fulfilment from "credit/Fulfilment"
import Defaulters from "credit/Defaulters"
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {


  return (
    //  <RouterProvider router={router} />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout children={undefined} />}>
        <Route path="overview" element={<Dashboard />} />
        <Route path="registered-users" element={<Table />}>
            <Route path="customers" element={<Customers />} />
            <Route path="gatekeeper" element={<Customers />} />
          </Route>
        <Route path="repayments" element={<Fulfilment />} />
        <Route path="loans" element={<Loans />} />
        <Route path="defaulters" element={<Defaulters />} />
        <Route path="report" element = {<Header />} />
      </Route>

      {/* <Route path="wallets" element={<Wallets />} /> */}
    </Routes>
  );
};
ReactDOM.render(
   <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
