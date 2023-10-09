import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FLEX } from "../../constants/flex";
import { handleCodeCopy } from "../../features/code/codeSlice";
import BoxCode from "../BoxCode/BoxCode";
import "highlight.js/styles/tokyo-night-dark.min.css";
import hljs from "highlight.js";

const GenerateCode = () => {
  const count = useSelector((state) => state.counter.value);
  const flexStyle = useSelector((state) => state.stylecontainer);
  const { boxes } = useSelector((state) => state.styleitem);
  const { copyCSS, copyHTML } = useSelector((state) => state.code);
  const dispatch = useDispatch();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const filteredStyles = Object.fromEntries(
    Object.entries(flexStyle).filter(([_, value]) => value !== "")
  );

  const containerStyles = `.container {
  display: flex;
  ${Object.entries(filteredStyles)
    .map(([key, value]) => `${FLEX[key].cssStyle}: ${value};`)
    .join("\n  ")}
}
${boxes
  .map(
    (item) => `.container .item-${item.index} {\n  ${Object.keys(item.styles)
      .filter((i) => item.styles[i])
      .map((i) => `${FLEX[i]?.cssStyle}:${item.styles[i]};`)
      .join("\n  ")}
}`
  )
  .join("\n")}`;

  const containerHTML = `<div class="flex-container">
  ${count
    .map((item, index) => `\t<div class=item-${item}>${item}</div>`)
    .join("\n")}
</div>`;

  const handleClickCopy = (code, type) => {
    dispatch(handleCodeCopy({ code: code, name: type, value: true }));
  };

  return (
    <div
      className={`h-1/2 flex fixed bottom-0 right-0 p-6 gap-4 w-full lg:pl-[330px]`}
    >
      <BoxCode
        filename="style.css"
        onCopy={() => handleClickCopy(containerStyles, "copyCSS")}
        isCopy={copyCSS}
      >
        <pre className="flex flex-col">
          <code id="textToCopy" className="language-css">
            {containerStyles}
          </code>
        </pre>
      </BoxCode>
      <BoxCode
        filename="index.html"
        onCopy={() => handleClickCopy(containerHTML, "copyHTML")}
        isCopy={copyHTML}
      >
        <pre>
          <code id="textToCopy" className="language-html">
            {containerHTML}
          </code>
        </pre>
      </BoxCode>
    </div>
  );
};

export default GenerateCode;
