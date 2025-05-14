"use client";

import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Modal({ children }: Props) {
  const router = useRouter();

  const handleOnOpenChange = (details: { open: boolean }) => {
    if (!details.open) {
      router.back();
    }
  };

  return (
    <Dialog.Root
      open={true}
      onOpenChange={handleOnOpenChange}
      size="xl"
      placement="top"
      motionPreset="slide-in-bottom"
      scrollBehavior="inside"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg="primary.300">
            <Dialog.Header>
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  color="secondary.500"
                  bg="primary.300"
                  _hover={{ filter: "brightness(0.9)" }}
                />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body bg="primary.300" maxH="80vh">
              {children}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
