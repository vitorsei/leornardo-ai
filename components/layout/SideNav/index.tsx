"use client";

import { Box, Flex, VStack } from "@chakra-ui/react";
import { FaRegImages } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import Logo from "../Logo";
import User from "../../User";
import SideNavItem from "./SideNavItem";
import Divider from "../Divider";
import SideNavLink from "./SideNavLink";
import { usePathname } from "next/navigation";

interface Props {
  showLogo?: boolean;
  onClose?: () => void;
}

export default function SideNav({ showLogo = true, onClose }: Props) {
  const pathname = usePathname();

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
              <Logo onClick={onClose} />
            </Flex>
          )}

          <Divider />
          <SideNavItem selected={pathname === "/user"} onClick={onClose}>
            <User />
          </SideNavItem>
          <SideNavItem selected={pathname === "/characters"} onClick={onClose}>
            <SideNavLink
              icon={<FaRegImages />}
              text="Characters"
              href="/characters"
            />
          </SideNavItem>
          <SideNavItem selected={pathname === "/contact"} onClick={onClose}>
            <SideNavLink
              icon={<FiSmartphone />}
              text="Contact"
              href="/contact"
            />
          </SideNavItem>
        </VStack>
      </Box>
    </Box>
  );
}
