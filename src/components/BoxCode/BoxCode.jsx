import React from "react";
import CopyButton from "../CopyButton/CopyButton";

const BoxCode = ({ filename, onCopy, children, isCopy }) => {
  return (
    <div className="flex-1 border rounded-lg overflow-auto bg-[#1b1b27]">
      <div className="flex justify-between px-4 py-2 items-center bg-slate-500 text-white">
        <div>{filename}</div>
        <CopyButton onClick={onCopy} isCopy={isCopy} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BoxCode;
