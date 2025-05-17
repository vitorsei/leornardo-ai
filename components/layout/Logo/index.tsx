import { Box } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

interface Props {
  onClick?: () => void;
}

export default function Logo({ onClick }: Props) {
  return (
    <Box w={{ base: 120, md: 200 }} onClick={onClick}>
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
