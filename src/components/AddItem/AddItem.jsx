import React from "react";
import { useRef } from "react";

const AddItem = ({ onAddItem }) => {
  const inputRef = useRef();

  const handleClickAdd = () => {
    const value = inputRef.current.value;
    onAddItem(value);
  };
  return (
    <div className="flex flex-col gap-4">
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
        <button className="btn btn-accent" onClick={handleClickAdd}>
          Add Item
        </button>
        <button className="btn btn-outline btn-accent">Clear</button>
      </div>
    </div>
  );
};

export default AddItem;
