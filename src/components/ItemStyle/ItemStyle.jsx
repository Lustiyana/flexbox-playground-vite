import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeItemStyles } from "../../features/styleItem/styleItemSlice";
import BoxInput from "../BoxInput/BoxInput";
import Select from "../Select/Select";

const stylesSelect = [
  {
    label: "Align Self",
    items: ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
    key: "alignSelf",
  },
  {
    label: "Shrink",
    items: ["0", "1"],
    key: "shrink",
  },
  {
    label: "Grow",
    items: ["0", "1"],
    key: "grow",
  },
];

const stylesInput = ["order", "basis"];

const ItemStyle = () => {
  const { selectedId, boxes } = useSelector((state) => state.styleitem);
  const dispatch = useDispatch();

  return (
    <div>
      {stylesSelect.map((item, index) => (
        <Select
          key={index}
          items={item.items}
          label={item.label}
          onChange={(e) =>
            dispatch(
              changeItemStyles({
                name: item.key,
                value: e.target.value,
                index: selectedId,
              })
            )
          }
          value={boxes.find((i) => i.index === selectedId).styles[item.key]}
        />
      ))}
      {stylesInput.map((item, index) => (
        <BoxInput
          key={index}
          label={item.charAt(0).toUpperCase() + item.slice(1)}
          onChange={(e) =>
            dispatch(
              changeItemStyles({
                name: item,
                value: e.target.value,
                index: selectedId,
              })
            )
          }
          value={boxes.find((i) => i.index === selectedId).styles[item]}
        />
      ))}
    </div>
  );
};

export default ItemStyle;
