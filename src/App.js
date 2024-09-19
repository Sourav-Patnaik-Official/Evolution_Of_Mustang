import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNavbar from "./Navbar/Nav";
import First_page from "./Content/First_page";
import RotateMessage from "./Rotate/RotateMessage";
import Credits from "./Credit/Credit";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <RotateMessage />
        <div className="flex h-screen">
          {/* Side Navbar on the left */}
          <SideNavbar />

          {/* Main content area */}
          <main className="flex-1 overflow-auto">
            <Routes>
              {/* Audio Player on the root path */}
              <Route path="/" element={<First_page />} />
              <Route path="/Credits" element={<Credits />} />

            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
