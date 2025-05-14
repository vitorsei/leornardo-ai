"use client";

import { Box, Link as ChakraLink, Flex, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
  href: string;
}

export default function SideNavItem({ icon, text, href }: Props) {
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <Box as="li" w="full">
      <ChakraLink
        as={NextLink}
        href={href}
        colorScheme="teal"
        bg={selected ? "secondary.200" : "none"}
        _hover={{
          bg: "secondary.200",
          textDecoration: "none",
          "& span": {
            color: "secondary.500",
          },
          "& svg": {
            color: "secondary.500",
          },
        }}
        py={2}
        pl={4}
        pr={10}
        w="full"
      >
        <Flex alignItems="center" gap={2}>
          <Icon color={selected ? "secondary.500" : "secondary.400"}>
            {icon}
          </Icon>
          <Text as="span" color={selected ? "secondary.500" : "secondary.400"}>
            {text}
          </Text>
        </Flex>
      </ChakraLink>
    </Box>
  );
}
