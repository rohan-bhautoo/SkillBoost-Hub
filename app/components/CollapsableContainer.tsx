"use client";
import { Collapse, Button } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  startingHeight: number;
  children: ReactNode;
}

const CollapsableContainer = ({ startingHeight, children }: Props) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Collapse startingHeight={startingHeight} in={show}>
        {children}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </>
  );
};

export default CollapsableContainer;
