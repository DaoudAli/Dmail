import React from "react";
import "./SidebarOption.css";
function SidebarOption({ Icon, title, number }) {
  return (
    <div className="sidebarOption">
      <Icon className="icon" />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
