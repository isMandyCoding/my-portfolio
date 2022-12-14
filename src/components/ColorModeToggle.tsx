/** @jsxImportSource theme-ui */
import React, { MouseEventHandler } from "react";
import { ReactComponent as SunshineLogo } from "../svg/sunshine.svg";
import { ReactComponent as SleepingMoonLogo } from "../svg/sleeping.svg";
import StyleableSVG from "./StyleableSVG";
import { useColorMode } from "theme-ui";
import Switch from "./Switch";

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleToggleClick: MouseEventHandler<HTMLInputElement> = (event) => {
    if (event.currentTarget.checked) {
      setColorMode("dark");
    } else {
      setColorMode("default");
    }
  };

  return (
    <div
      sx={{
        m: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyleableSVG svg={<SunshineLogo />} />
      <Switch checked={colorMode === "dark"} onClick={handleToggleClick} />
      <StyleableSVG svg={<SleepingMoonLogo />} />
    </div>
  );
};
export default ColorModeToggle;
