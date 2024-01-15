import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      borderRadius={15}
      aria-label="Change Mode"
      variant="ghost"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon color="icon" />}
    </Button>
  );
};

export default ColorModeSwitch;
