import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { increment } from "./features/counter/counterSlice";

function App() {
  const [count, setCount] = useState([]);
  // const cnt = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  const onAddItem = (value) => {
    const arr = [];
    for (let i = 1; i <= value; i++) {
      arr.push(i);
    }
    setCount(arr);
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        <div className="p-5">
          <div className="flex gap-4">
            {count.map((i, index) => (
              <div
                className="card w-56 bg-base-100 shadow-xl border mb-4"
                key={index}
              >
                <div className="card-body">
                  <p>{i}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <button onClick={() => dispatch(increment())}>button</button>
          <span>{cnt}</span> */}
        </div>
      </div>
      <Sidebar onAddItem={onAddItem} />
    </div>
  );
}

export default App;
