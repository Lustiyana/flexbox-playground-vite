import { useSelector } from "react-redux";
import "./App.css";
import FlexItems from "./components/FlexItems/FlexItems";
import GenerateCode from "./components/GenerateCode/GenerateCode";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const openCode = useSelector((state) => state.code.openCode);

  return (
    <div className="drawer lg:drawer-open overflow-y-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        <FlexItems />
        {openCode ? <GenerateCode /> : null}
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
