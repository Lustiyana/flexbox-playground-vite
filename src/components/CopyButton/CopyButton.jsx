import React from "react";
import { Icon } from "@iconify/react";

const CopyButton = ({ onClick, isCopy }) => {
  return !isCopy ? (
    <button className="border px-2 py-1 rounded-lg w-16 h-10" onClick={onClick}>
      Copy
    </button>
  ) : (
    <div className="border border-[#00ff00] px-2 py-1 rounded-lg w-16 text-center h-10">
      <div className="flex justify-center">
        <Icon icon="uis:check" width={32} color="#00ff00" />
      </div>
    </div>
  );
};

export default CopyButton;
