import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map(({ name, icon }) => (
      <div className="w-28 h-28 flex flex-col items-center justify-center" key={name}>
        <img src={icon} alt={name} className="w-16 h-16 object-contain mb-2" />
        <span className="text-secondary text-sm">{name}</span>
      </div>
    ))}
  </div>
);

export default SectionWrapper(Tech, "");
