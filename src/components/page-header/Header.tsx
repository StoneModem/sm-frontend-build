import React, { CSSProperties } from "react";

import { Link } from "react-router-dom";
{
  /* <Link to={`/dev`}>Your Name</Link>; */
}

const headerContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "7vh",
  backgroundColor: "red",

  position: "sticky",
  width: "100%",
  top: 0,
};

const headerContainerContent: CSSProperties = {
  backgroundColor: "blue",
  padding: "5px 10px",
  margin: "5px 10px",
};

function Header() {
  return (
    <div className="" style={{ ...headerContainer }}>
      <div style={{ ...headerContainerContent }}>Page Title</div>
      <div style={{ ...headerContainerContent }}>Contact</div>
    </div>
  );
}

export default Header;
