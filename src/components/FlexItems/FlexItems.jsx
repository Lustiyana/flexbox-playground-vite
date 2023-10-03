import React from "react";
import { useSelector } from "react-redux";
import { FLEX } from "../../constants/flex";

const FlexItems = () => {
  const count = useSelector((state) => state.counter.value);
  const selectChange = useSelector((state) => state.select);
  console.log(selectChange);
  return (
    <div className="flex flex-col justify-between h-full mt-16 lg:ml-[320px] overflow-y-hidden p-6">
      <div
        className={`flex gap-4 ${
          FLEX["alignContent"].class[selectChange.alignContent]
        } ${FLEX["alignItems"].class[selectChange.alignItems]} ${
          FLEX["flexDirection"].class[selectChange.flexDirection]
        } ${FLEX["flexWrap"].class[selectChange.flexWrap]} ${
          FLEX["justifyContent"].class[selectChange.justifyContent]
        }`}
      >
        {count.map((i, index) => (
          <div
            className="card w-56 bg-base-100 shadow-xl border mb-4"
            key={index}
          >
            <div className="card-body">
              <p>{i}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexItems;
