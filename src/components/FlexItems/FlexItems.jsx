import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FLEX } from "../../constants/flex";
import { handleClickItem } from "../../features/styleItem/styleItemSlice";

const FlexItems = () => {
  const count = useSelector((state) => state.counter.value);
  const { openItem, selectedId, boxes } = useSelector(
    (state) => state.styleitem
  );
  const selectChange = useSelector((state) => state.stylecontainer);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(handleClickItem(item));
  };

  console.log(boxes);

  return (
    <div className="flex flex-col justify-between h-full mt-16 lg:ml-[320px] overflow-y-hidden p-6">
      <div
        className={`
      flex gap-4
      ${FLEX["alignContent"].class[selectChange.alignContent]}
      ${FLEX["alignItems"].class[selectChange.alignItems]}
      ${FLEX["flexDirection"].class[selectChange.flexDirection]}
      ${FLEX["flexWrap"].class[selectChange.flexWrap]}
      ${FLEX["justifyContent"].class[selectChange.justifyContent]}
    `}
      >
        {count.map((item) => (
          <div
            style={{
              flexBasis: `${
                boxes?.find((i) => i.index === item)?.styles?.basis
              }px`,
              order: boxes?.find((i) => i.index === item)?.styles?.order,
            }}
            className={`card w-56 bg-base-100 border mb-4 ${
              FLEX["alignSelf"].class[
                boxes?.find((i) => i.index === item)?.styles?.alignSelf
              ]
            } ${
              FLEX["shrink"].class[
                boxes?.find((i) => i.index === item)?.styles?.shrink
              ]
            } ${
              FLEX["grow"].class[
                boxes?.find((i) => i.index === item)?.styles?.grow
              ]
            } ${boxes?.find((i) => i.index === item)?.styles?.order}]
             ${item === selectedId && openItem ? `shadow-xl` : ""}`}
            key={item}
            onClick={() => handleClick(item)}
          >
            <div className="card-body">
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexItems;
