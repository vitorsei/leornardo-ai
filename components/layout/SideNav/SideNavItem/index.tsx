"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  selected: boolean;
  onClick?: () => void;
}

export default function SideNavItem({ selected, children, onClick }: Props) {
  return (
    <Box as="li" w="full" onClick={onClick}>
      <Box
        cursor="pointer"
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
        {children}
      </Box>
    </Box>
  );
}
