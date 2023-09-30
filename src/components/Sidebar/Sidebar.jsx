import React from "react";
import { useState } from "react";
import AddItem from "../AddItem/AddItem";
import Select from "../Select/Select";

const Sidebar = ({ onAddItem }) => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <AddItem onAddItem={onAddItem} />
        <Select />
      </div>
    </div>
  );
};

export default Sidebar;
