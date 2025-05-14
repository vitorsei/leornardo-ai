import { Box, Separator } from "@chakra-ui/react";

interface Props {
  color?: string;
}

export default function Divider({ color }: Props) {
  if (color) {
    return <Separator borderColor={color} />;
  }

  return (
    <Box w="full">
      <Separator
        border="0.25px solid transparent"
        style={{
          borderImage:
            "linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%) 1",
        }}
        mx={3}
      />
    </Box>
  );
}
