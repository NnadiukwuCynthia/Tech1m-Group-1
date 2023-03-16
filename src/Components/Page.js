import React from "react";
import Menu from "./Navbar/Menu";
import Body from "./Body";
import "../index.css";

const Page = () => {
  return (
    <>
      <div className="Page">
        <div className="Sidebar">
          <Menu />
        </div>
        <div className="bodyBar">
          <Body />
        </div>
      </div>
    </>
  );
};

export default Page;
