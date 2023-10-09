import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClickClose } from "../../features/styleItem/styleItemSlice";
import { handleOpenCode } from "../../features/code/codeSlice";
import Button from "../Button/Button";
import FormItemBox from "../FormItemBox/FormItemBox";
import "./style.css";
import ContainerStyle from "../ContainerStyle/ContainerStyle";
import ItemStyle from "../ItemStyle/ItemStyle";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const counter = useSelector((state) => state.counter.value);
  const { openItem } = useSelector((state) => state.styleitem);
  const dispatch = useDispatch();
  console.log(openItem);
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        {!openItem ? (
          <div className="flex flex-col gap-2">
            <FormItemBox />
            <ContainerStyle />
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
        ) : (
          <div>
            <div
              onClick={() => dispatch(handleClickClose(false))}
              className="font-bold flex gap-1 items-center mb-4 text-lg cursor-pointer"
            >
              <Icon icon="ion:arrow-back" width={24} />
              <div>Kembali</div>
            </div>
            <ItemStyle />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
