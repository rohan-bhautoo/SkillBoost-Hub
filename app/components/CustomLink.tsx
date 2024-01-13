import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  href: string;
  label: string;
}

const CustomLink = ({ href, label }: Props) => {
  return (
    <Link as={NextLink} href={href} colorScheme="blue" color="blue.500">
      {label}
    </Link>
  );
};

export default CustomLink;
