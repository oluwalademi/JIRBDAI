import React from "react";

type Props = {
  titleHeader: string;
  paramsother?: string;
  tinyColor?: string;
  bigColor?: string;
  textColor?: string;
};

const SubTopBar = ({ titleHeader, tinyColor, bigColor, textColor }: Props) => {
  return (
    <div
      className={`${
        bigColor ? `${bigColor}` : "bg-[rgba(118,112,112,0.2)]"
      } flex w-full flex-row items-center gap-4 py-5`}
    >
      <div
        className={`h-8 w-3 rounded-sm ${
          tinyColor ? `${tinyColor}` : "bg-toreabay"
        }`}
      />

      <h2
        className={`font-inter text-lg font-extrabold ${
          textColor ? `${textColor}` : "text-black"
        }`}
      >
        {titleHeader}
      </h2>
    </div>
  );
};

export default SubTopBar;
