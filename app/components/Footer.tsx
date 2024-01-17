import { Box, Container, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bgColor="gray.700" p={5} textColor="white">
      <Container maxW="90%">
        © 2024 SkillBoost Hub
        <Link pl={5} href="/">
          Privacy policy
        </Link>
        <Link pl={5} href="/">
          Terms of service
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
