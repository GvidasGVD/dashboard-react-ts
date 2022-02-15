import React from "react";
import classes from "./App.module.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/dashboard/Home"

function App() {
  return (
    <div className={classes.temporary_width}>
    <Layout>
      <Home />
    </Layout>
    </div>
  );
}

export default App;
