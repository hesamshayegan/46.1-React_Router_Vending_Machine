import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './Homepage'
import Orange from "./Orange";
import Apple from "./Apple";
import Cookie from "./Cookie";


function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/cookie" element={<Cookie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default VendingMachine;
