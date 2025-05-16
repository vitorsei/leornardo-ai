"use client";

import { Link as ChakraLink, Flex, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  href: string;
}

export default function SideNavLink({ icon, text, href }: Props) {
  return (
    <ChakraLink
      as={NextLink}
      href={href}
      colorScheme="teal"
      textDecoration="none"
      py={2}
      pl={4}
      pr={10}
      w="full"
    >
      <Flex alignItems="center" gap={2}>
        <Icon>{icon}</Icon>
        <Text as="span">{text}</Text>
      </Flex>
    </ChakraLink>
  );
}
