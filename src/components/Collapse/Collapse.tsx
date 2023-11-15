import React, { useState } from "react";
import "./collapse.css";
import CollapseProps from "./interfaces/CollapseProps";

export const Collapse: React.FC<CollapseProps> = ({ collapsedLabel = "Развернуть", expandedLabel = "Свернуть", children }) => {
  const [show, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!show);
  };

  return (
    <div className="collapse-container">
      <button className={`collapse-button ${show ? "show" : ""}`} onClick={handleToggle}>
        {show ? expandedLabel : collapsedLabel}
      </button>
      <div className={`collapse-content ${show ? "show" : "collapsed"}`}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
