import React from "react";
import "./App.css";
import Portfoilo from "./Page/Portfoilo";
import Detailpage from "./Page/Detailpage";
import Resume from "./Page/Resume";
import { Route, Routes } from "react-router-dom";
import Workbook from "./Page/Workbook";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Portfoilo />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Workbook" element={<Workbook />} />
        <Route path="Detailpage" element={<Detailpage />} />
      </Routes>
    </div>
  );
}

export default App;
