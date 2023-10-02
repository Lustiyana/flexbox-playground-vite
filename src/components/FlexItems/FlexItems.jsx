import React from "react";
import { useSelector } from "react-redux";
import { FLEX } from "../../constants/flex";

const FlexItems = () => {
  const count = useSelector((state) => state.counter.value);
  const selectChange = useSelector((state) => state.select);
  console.log(selectChange);
  return (
    <div className="p-5">
      <div
        className={`flex gap-4 ${
          FLEX["alignContent"][selectChange.alignContent]
        } ${FLEX["alignItems"][selectChange.alignItems]} ${
          FLEX["flexDirection"][selectChange.flexDirection]
        } ${FLEX["flexWrap"][selectChange.flexWrap]} ${
          FLEX["justifyContent"][selectChange.justifyContent]
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
