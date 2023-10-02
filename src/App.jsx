import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FlexItems from "./components/FlexItems/FlexItems";
import Footer from "./components/Footer/Footer";
import GenerateCode from "./components/GenerateCode/GenerateCode";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const openCode = useSelector((state) => state.code.openCode);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        <div className="flex flex-col justify-between h-screen">
          <FlexItems />
          {openCode ? <GenerateCode /> : null}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
