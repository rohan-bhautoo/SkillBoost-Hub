import noImage from "@/app/assets/no-image-placeholder.webp";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { GrThreeDEffects } from "react-icons/gr";

const Sidebar = () => {
  return (
    <>
      <Heading fontSize={"xl"} marginBottom={3}>
        Category
      </Heading>
      <List>
        <ListItem paddingY="5px">
          <HStack>
            <Image
              boxSize="34px"
              borderRadius={8}
              objectFit={"cover"}
              src={GrThreeDEffects.name}
              fallbackSrc={noImage.src}
            />
            <Button
              fontWeight="normal"
              fontSize="lg"
              variant="link"
              whiteSpace={"normal"}
              textAlign={"left"}
            >
              3D & Animation
            </Button>
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default Sidebar;
