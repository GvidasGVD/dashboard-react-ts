import React from "react";
import classes from "./App.module.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/dashboard/Home";
import Users from "./pages/quickMenu/users/AllUsers";
import {Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className={classes.temporary_width}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard-react-ts/home" />}></Route>
          <Route path="dashboard-react-ts/home" element={<Home />}></Route>
          <Route path="dashboard-react-ts/users" element={<Users />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
