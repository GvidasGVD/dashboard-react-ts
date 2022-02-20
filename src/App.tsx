import React from "react";
import classes from "./App.module.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/dashboard/Home";
import Users from "./pages/quickMenu/users/AllUsers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={classes.temporary_width}>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
