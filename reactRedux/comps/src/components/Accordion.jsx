import React from "react";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) =>
      currentExpandedIndex === nextIndex ? null : nextIndex
    );
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
