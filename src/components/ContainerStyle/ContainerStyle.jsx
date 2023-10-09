import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../features/styleContainer/styleContainerSlice";
import Select from "../Select/Select";

const styles = [
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

const ContainerStyle = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.stylecontainer);
  return styles.map((item, index) => (
    <Select
      key={index}
      onChange={(e) =>
        dispatch(handleChange({ value: e.target.value, name: item.key }))
      }
      value={select[item.key]}
      items={item.items}
      label={item.label}
    />
  ));
};

export default ContainerStyle;
