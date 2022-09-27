import React, { CSSProperties } from "react";

// import { Link } from "react-router-dom";
// <Link to={`/dev`}>Your Name</Link>;

const headerContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row-reverse",
  minHeight: "7vh",
  backgroundColor: "red",

  position: "sticky",
  width: "100%",
  bottom: 0,
};

const headerContainerContent: CSSProperties = {
  backgroundColor: "blue",
  padding: "5px 10px",
  margin: "5px 10px",
  alignSelf: "center",
};

function Header() {
  return (
    <div className="" style={{ ...headerContainer }}>
      {/* <div style={{ ...headerContainerContent }}>By Steinn</div> */}
      <div style={{ ...headerContainerContent }}>By Steinn 2022</div>
    </div>
  );
}

export default Header;
