"use client";

import { ChakraProvider, defaultSystem, createSystem } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const customSystem = createSystem(defaultSystem._config, {
  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: "#f5f5f5" },
          100: { value: "#e5e5e5" },
          200: { value: "#c6c6c6" },
          300: { value: "#242429" },
          400: { value: "#4c4c4c" },
          500: { value: "#787887" },
          600: { value: "#878787" },
          700: { value: "#000000" },
        },
        secondary: {
          50: { value: "#e0ffff" },
          100: { value: "#b3ffff" },
          200: { value: "#2d2d34" },
          300: { value: "#4dffff" },
          400: { value: "#717171" },
          500: { value: "#ffffff" },
          600: {
            value:
              "linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%);",
          },
        },
        tertiary: {
          50: { value: "#e0ffff" },
          100: { value: "#b3ffff" },
          200: { value: "#2d2d34" },
          300: { value: "#71717a" },
          400: { value: "#22c55e" },
          500: { value: "#ef4444" },
        },
      },
    },
  },
});

export function UIProvider({ children }: PropsWithChildren) {
  return <ChakraProvider value={customSystem}>{children}</ChakraProvider>;
}
