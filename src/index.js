import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import App from './App';
import ScreenRec from './ScreenRec';
import ScreenRecId from './ScreenRecId';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/screenrec" element={<ScreenRec />} />
          <Route path="/screenrec/:id" element={<ScreenRecId />} />
          <Route path="*" element={<Navigate to="/screenrec" />} />
      </Routes>
    </BrowserRouter>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
