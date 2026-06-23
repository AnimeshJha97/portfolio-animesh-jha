import React from "react";

interface boxInterface {
  keyParam: number | string;
  skill: string;
}

const SkillBox = ({ keyParam, skill }: boxInterface) => {
  return (
    <div
      key={keyParam}
      className="rounded-[16px] bg-primary/30 px-2 py-1 text-xs text-primary duration-500 hover:bg-primary hover:text-bgCol sm:px-3 md:mt-2 md:px-4 md:text-sm"
    >
      <p>{skill}</p>
    </div>
  );
};

export default SkillBox;
