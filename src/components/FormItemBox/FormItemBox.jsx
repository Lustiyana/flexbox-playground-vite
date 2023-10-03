import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { onAddItem, onClearItem } from "../../features/counter/counterSlice";
import { onClearContainer } from "../../features/select/selectSlice";
import Button from "../Button/Button";

const FormItemBox = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleClickAdd = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    dispatch(onAddItem(value));
  };

  const handleClickClear = () => {
    inputRef.current.value = "";
    dispatch(onClearItem());
    dispatch(onClearContainer());
  };
  return (
    <form className="flex flex-col gap-2" method="POST">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Box</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          ref={inputRef}
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
