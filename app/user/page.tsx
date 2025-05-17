"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Input,
  Heading,
  Text,
  Container,
  Stack,
} from "@chakra-ui/react";
import { useUser } from "@/context/UserContext";

export default function UserPage() {
  const { setUser, user } = useUser();
  const router = useRouter();

  const [username, setUsername] = useState(user?.username || "");
  const [editMode] = useState(user?.username && user?.jobTitle);
  const [jobTitle, setJobTitle] = useState(user?.jobTitle || "");
  const [errors, setErrors] = useState({ username: "", jobTitle: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = { username: "", jobTitle: "" };
    let isValid = true;

    if (!username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setUser({ username, jobTitle });

    setTimeout(() => {
      router.push("/characters");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Container maxW="md" py={8}>
      <Box
        bg="gray.800"
        p={8}
        borderRadius="xl"
        boxShadow="xl"
        border="1px"
        borderColor="whiteAlpha.200"
      >
        <Box textAlign="center" mb={6}>
          <Heading as="h2" size="lg" mb={2} color="whiteAlpha.900">
            {editMode ? "Edit Your Details" : " Get Started"}
          </Heading>
          <Text color="whiteAlpha.700">
            Enter your details to explore the multiverse
          </Text>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
            <Box>
              <Text mb={2} color="whiteAlpha.900" fontWeight="medium">
                Username
              </Text>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                bg="gray.700"
                border="1px"
                borderColor={errors.username ? "red.500" : "whiteAlpha.200"}
                _placeholder={{ color: "whiteAlpha.400" }}
                _hover={{ borderColor: "whiteAlpha.300" }}
                _focus={{ borderColor: "brand.500", boxShadow: "none" }}
              />
              {errors.username && (
                <Text color="red.500" fontSize="sm" mt={1}>
                  {errors.username}
                </Text>
              )}
            </Box>

            <Box>
              <Text mb={2} color="whiteAlpha.900" fontWeight="medium">
                Job Title
              </Text>
              <Input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Enter your job title"
                bg="gray.700"
                border="1px"
                borderColor={errors.jobTitle ? "red.500" : "whiteAlpha.200"}
                _placeholder={{ color: "whiteAlpha.400" }}
                _hover={{ borderColor: "whiteAlpha.300" }}
                _focus={{ borderColor: "brand.500", boxShadow: "none" }}
              />
              {errors.jobTitle && (
                <Text color="red.500" fontSize="sm" mt={1}>
                  {errors.jobTitle}
                </Text>
              )}
            </Box>

            <Button
              type="submit"
              width="full"
              size="lg"
              bg="secondary.600"
              border="none"
              _hover={{ filter: "brightness(0.9)" }}
              _active={{ filter: "brightness(0.8)" }}
              mt={2}
              loading={isSubmitting}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
