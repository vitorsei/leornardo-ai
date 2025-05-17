import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      className="fixed bottom-0 w-full h-20"
      bg="primary.300"
      p={6}
      borderTop="0.5px solid"
      style={{
        borderImage:
          "linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%) 1",
      }}
    >
      <Text
        className="w-full py-6 flex justify-end items-center"
        textStyle="sm"
        color="primary.500"
      >
        Challenge Version 3.5
      </Text>
    </Box>
  );
};
