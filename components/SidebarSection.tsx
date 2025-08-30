import React from "react";
import TopBar from "@/components/TopBar";

export enum FlexClass {
  None = "md:flex-none",
  Flex = "md:flex",
}

type NavItem = {
  name: string;
  url: string;
};

type Props = {
  item?: NavItem[];
  title?: string; // optional prop
  children?: React.ReactNode;
  flexStyle?: FlexClass; // optional: use enum here
};
const SidebarSection = ({
  item,
  title,
  children,
  flexStyle = FlexClass.None,
}: Props) => {
  return (
    <div
      className={`m-0 flex w-full min-w-[320px] flex-1 flex-col self-stretch md:w-[320px] ${flexStyle}`}
    >
      <TopBar titleHeader={title ?? "Section"} />
      <div className={"bg-section mb-32 flex-col !p-1"}>
        {item?.map((unit) => (
          <a
            href={unit.url}
            key={unit.name}
            className="w-full font-inter font-semibold text-toreabay"
          >
            <div className={"pb-2 pl-5 pt-3"}>{unit.name}</div>
            <div className={"w-full border-b-2 border-gray-400"}></div>
          </a>
        ))}
        <div className={"w-full"}>{children || ""}</div>
      </div>
    </div>
  );
};

export default SidebarSection;
