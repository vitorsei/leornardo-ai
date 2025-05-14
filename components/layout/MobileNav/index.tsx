"use client";

import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import SideNav from "../SideNav";
import Logo from "@/components/layout/Logo";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Box as="nav" w="full" bg="primary.300" p="4">
      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement="start"
      >
        <Flex w="full" justify="space-between" alignItems="center">
          <Logo />
          <Drawer.Trigger asChild>
            <IconButton
              aria-label="Search database"
              bg="primary.300"
              _hover={{ filter: "brightness(0.9)" }}
            >
              <MdOutlineMenu />
            </IconButton>
          </Drawer.Trigger>
        </Flex>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="primary.300">
              <Drawer.Header>
                <Drawer.Title>
                  <Logo />
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body p={0}>
                <SideNav showLogo={false} />
              </Drawer.Body>
              <Drawer.CloseTrigger asChild top={6}>
                <CloseButton
                  size="sm"
                  color="secondary.500"
                  bg="primary.300"
                  _hover={{ filter: "brightness(0.9)" }}
                />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
