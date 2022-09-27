import React, { CSSProperties } from "react";

const homeBodyContainer: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  minHeight: "100%",
  padding: "1vh 0",
};

const homeBodyContainerMain: CSSProperties = {
  outline: "2px solid green",
  minWidth: "30vw",
  padding: "20px 10px",
  backgroundColor: "rgba(0,0,0,0.1)",
  borderRadius: "5px",
};

const homeBodyContainerLeft: CSSProperties = {
  outline: "2px solid green",
  textAlign: "right",
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: "20px 10px",
  marginBottom: "50%",
  marginLeft: "50%",
  borderRadius: "5px",
};

const homeBodyContainerRight: CSSProperties = {
  outline: "2px solid green",
  textAlign: "left",
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: "20px 10px",
  marginBottom: "50%",
  marginRight: "50%",
  borderRadius: "5px",
};

function HomeBody() {
  return (
    <div style={{ ...homeBodyContainer }}>
      <div style={{ ...homeBodyContainerLeft }}>Left Element</div>
      <div style={{ ...homeBodyContainerMain }}>
        <div className="blogPost">Middle element</div>
      </div>
      <div style={{ ...homeBodyContainerRight }}>Right element</div>
    </div>
  );
}

export default HomeBody;
