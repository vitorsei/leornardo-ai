import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <Box p={12} justifyContent="start">
      <Stack gap={6} align="start">
        <Heading as="h1" size="xl">
          Contact Me
        </Heading>

        <Text fontSize="xl" color="whiteAlpha.700" mb="6">
          If you’d like to connect or raise any issues, feel free to reach out.
        </Text>

        <Stack gap={4}>
          <Flex align="center" gap={2}>
            <MdEmail size={20} />
            <Link
              href="mailto:vitor@example.com"
              color="blue.500"
              target="_blank"
              rel="noopener noreferrer"
            >
              seiji.vitor@gmail.com
            </Link>
          </Flex>

          <Flex align="center" gap={2}>
            <FaLinkedin size={20} />
            <Link
              href="https://www.linkedin.com/in/vitoriwanura"
              color="blue.500"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/vitoriwanura
            </Link>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
}
