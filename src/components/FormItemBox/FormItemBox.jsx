import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleClearCopy } from "../../features/code/codeSlice";
import { onAddItem, onClearItem } from "../../features/counter/counterSlice";
import { onClearContainer } from "../../features/styleContainer/styleContainerSlice";
import { clearStyleItem } from "../../features/styleItem/styleItemSlice";
import BoxInput from "../BoxInput/BoxInput";
import Button from "../Button/Button";

const FormItemBox = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleClickAdd = (e) => {
    e.preventDefault();
    dispatch(onAddItem(input));
  };

  const handleClickClear = () => {
    setInput("");
    dispatch(onClearItem());
    dispatch(onClearContainer());
    dispatch(clearStyleItem());
    dispatch(handleClearCopy());
  };
  return (
    <form className="flex flex-col gap-2" method="POST">
      <div className="form-control w-full max-w-xs">
        <BoxInput
          label="Box"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button
          onClick={handleClickAdd}
          label="Submit"
          color="primary"
          type="submit"
        />
        <Button
          onClick={handleClickClear}
          label="Clear"
          color="primary"
          outline
          type="button"
        />
      </div>
    </form>
  );
};

export default FormItemBox;
