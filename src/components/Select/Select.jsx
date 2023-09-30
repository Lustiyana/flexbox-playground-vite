import React from "react";

const flexItems = [
  {
    label: "Flex Direction",
    items: ["row", "column", "row-reverse", "column-reverse"],
  },
  {
    label: "Flex Wrap",
    items: ["no-wrap", "wrap", "wrap-reverse"],
  },
  {
    label: "Justify Content",
    items: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  {
    label: "Align Items",
    items: ["flex-start", "flex-end", "center", "stratch", "baseline"],
  },
  {
    label: "Align Content",
    items: [
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "space-between",
      "space-around",
    ],
  },
];

const Select = () => {
  return (
    <div>
      {flexItems.map((item, index) => (
        <div key={index} className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{item.label}</span>
          </label>
          <select className="select select-bordered">
            {item.items.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Select;
