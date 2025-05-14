import MobileNav from "@/components/layout/MobileNav";
import SideNav from "@/components/layout/SideNav";
import { Box } from "@chakra-ui/react";

export default function MainLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Box display={{ base: "block", md: "none" }}>
        <MobileNav />
      </Box>
      <div className="flex w-full h-full min-h-screen">
        {modal}
        <Box
          display={{ base: "none", md: "block" }}
          borderRight="1px"
          borderColor="whiteAlpha.200"
        >
          <SideNav />
        </Box>
        <Box pl={{ base: 0, md: 280 }} pb={24} w="full">
          {children}
        </Box>
      </div>
    </>
  );
}
