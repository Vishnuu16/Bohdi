import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Homepage from "./pages/home/home";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage/>} />
       
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
