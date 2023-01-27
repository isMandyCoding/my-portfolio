/** @jsxImportSource theme-ui */
import React, { ChangeEventHandler } from "react";
import { ReactComponent as SunshineLogo } from "../svg/sunshine.svg";
import { ReactComponent as SleepingMoonLogo } from "../svg/sleeping.svg";
import StyleableSVG from "./StyleableSVG";
import { useColorMode } from "theme-ui";
import Switch from "./Switch";

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleToggleClick: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.currentTarget.checked) {
      setColorMode("dark");
    } else {
      setColorMode("default");
    }
  };

  return (
    <div
      sx={{
        // m: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <span sx={{ mx: 2 }}>
        <StyleableSVG svg={<SunshineLogo />} />
      </span>
      <Switch checked={colorMode === "dark"} onClick={handleToggleClick} />
      <span sx={{ mx: 2 }}>
        <StyleableSVG svg={<SleepingMoonLogo />} />
      </span>
    </div>
  );
};
export default ColorModeToggle;
