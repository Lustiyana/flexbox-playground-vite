import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleOpenCode } from "../../features/code/codeSlice";
import Button from "../Button/Button";
import FormItemBox from "../FormItemBox/FormItemBox";
import Select from "../Select/Select";

const Sidebar = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <div className="flex flex-col gap-4">
          <FormItemBox />
          <Select />
          {counter.length > 0 ? (
            <Button
              onClick={() => dispatch(handleOpenCode(true))}
              label="Generate Code"
              color="primary"
              outline
              type="button"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
