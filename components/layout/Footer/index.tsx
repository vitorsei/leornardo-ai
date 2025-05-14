import { Box, Text } from "@chakra-ui/react";
import Divider from "../Divider";

export const Footer = () => {
  return (
    <Box
      as="footer"
      className="fixed bottom-0 w-full h-20"
      bg="primary.300"
      p={6}
    >
      <Divider />
      <Text
        className="w-full py-6 flex justify-end items-center"
        p={4}
        textStyle="sm"
        color="primary.500"
      >
        Challenge Version 3.5
      </Text>
    </Box>
  );
};
