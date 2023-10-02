import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../features/select/selectSlice";

const flexItems = [
  {
    label: "Flex Direction",
    items: ["row", "column", "row-reverse", "column-reverse"],
    key: "flexDirection",
  },
  {
    label: "Flex Wrap",
    items: ["no-wrap", "wrap", "wrap-reverse"],
    key: "flexWrap",
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
    key: "justifyContent",
  },
  {
    label: "Align Items",
    items: ["flex-start", "flex-end", "center", "stratch", "baseline"],
    key: "alignItems",
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
    key: "alignContent",
  },
];

const Select = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.select);
  return (
    <div>
      {flexItems.map((item, index) => (
        <div key={index} className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{item.label}</span>
          </label>
          <select
            className="select select-bordered"
            onChange={(e) =>
              dispatch(handleChange({ value: e.target.value, name: item.key }))
            }
            value={select[item.key]}
          >
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
