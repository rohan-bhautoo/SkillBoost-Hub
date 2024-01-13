import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const ImageLink = ({ href, children }: Props) => {
  return (
    <Link as={NextLink} href={href}>
      {children}
    </Link>
  );
};

export default ImageLink;
