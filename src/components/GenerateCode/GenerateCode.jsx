import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FLEX } from "../../constants/flex";
import { handleCodeCopy } from "../../features/code/codeSlice";
import CopyButton from "../CopyButton/CopyButton";

const GenerateCode = () => {
  const count = useSelector((state) => state.counter.value);
  const flexStyle = useSelector((state) => state.select);
  const dispatch = useDispatch();

  const filteredStyles = Object.fromEntries(
    Object.entries(flexStyle).filter(([_, value]) => value !== "")
  );

  const containerStyles = `
.container{ \n
  ${Object.entries(filteredStyles)
    .map(([key, value]) => `${FLEX[key].cssStyle}: ${value};`)
    .join("\n  ")}
}
`;

  const containerHTML = `<div className="flex-container">\n
  ${count.map((item, index) => `\t<div>${item}</div>`).join("\n")}
</div>`;

  console.log(containerHTML);

  const handleClickCopy = (code) => {
    dispatch(handleCodeCopy(code));
  };

  return (
    <div className={`bg-neutral h-1/2 text-white flex fixed bottom-0 right-0`}>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>style.css</div>
          <CopyButton onClick={() => handleClickCopy(containerStyles)} />
        </div>
        <code id="textToCopy">{containerStyles}</code>
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>index.html</div>
          <CopyButton onClick={() => handleClickCopy(containerHTML)} />
        </div>
        <code id="textToCopy">{containerHTML}</code>
      </div>
    </div>
  );
};

export default GenerateCode;
