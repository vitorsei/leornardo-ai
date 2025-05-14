import { Box, Flex, VStack } from "@chakra-ui/react";
import { FaRegImages } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import Logo from "../Logo";
import User from "../../User";
import SideNavItem from "./SideNavItem";
import Divider from "../Divider";

interface Props {
  showLogo?: boolean;
}

export default function SideNav({ showLogo = true }: Props) {
  return (
    <Box
      as="aside"
      flexShrink={0}
      bg="primary.300"
      h="100%"
      position={{ base: "default", md: "fixed" }}
    >
      <Box as="nav">
        <VStack as="ul" align="start">
          {showLogo && (
            <Flex as="li" justify="center" py={6} px={10} w="full">
              <Logo />
            </Flex>
          )}

          <Divider />
          <Box as="li" pt={2} pb={4} pl={4} width={56}>
            <User />
          </Box>

          <SideNavItem
            icon={<FaRegImages />}
            text="Characters"
            href="/characters"
          />
          <SideNavItem icon={<FiSmartphone />} text="Contact" href="/contact" />
        </VStack>
      </Box>
    </Box>
  );
}
