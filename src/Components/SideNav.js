import React, { useState } from "react";
import "../styles/SideNav.css";
import { HamburgerIcon, SpinnerIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text } from "@chakra-ui/react";

export default function SideNav() {
  const [options, setOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ]);

  const [collapsed, setCollapsed] = useState(false);

  const hamClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`wrapper ${collapsed ? "collapsed" : ""}`}>
      <div className={`header ${collapsed ? "collapsed" : ""}`}>
        <IconButton
          icon={<HamburgerIcon boxSize="1.5rem" />}
          aria-label="Toggle Navigation"
          variant="outline"
          borderColor="bisque"
          borderWidth="2px"
          backgroundColor="skyblue"
          borderRadius="5px"
          size="lg"
          padding={"3px"}
          onClick={hamClick}
          marginLeft={"1rem"}
        />

        <div className="icon-label">{!collapsed && "Options"}</div>
      </div>
      <div className="middle">
        {options.map((option) => {
          return (
            <div className="option ">
              <SpinnerIcon /> {!collapsed && option}
            </div>
          );
        })}
      </div>
      <div className="footer"></div>
    </div>
  );
}
