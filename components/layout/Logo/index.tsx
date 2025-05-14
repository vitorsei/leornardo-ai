import { Box } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export default function Logo() {
  return (
    <Box w={{ base: 120, md: 200 }}>
      <NextLink href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={75}
          priority
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
        />
      </NextLink>
    </Box>
  );
}
