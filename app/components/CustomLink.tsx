import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  href: string;
  label: string;
  children: ReactNode;
}

const CustomLink = ({ href, label, children }: Props) => {
  return (
    <Link as={NextLink} href={href}>
      {children}
    </Link>
  );
};

export default CustomLink;
