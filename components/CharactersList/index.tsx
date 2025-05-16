"use client";

import { Character } from "@/lib/get-characters-info";
import { Box, Center, Icon, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LuCircleChevronDown } from "react-icons/lu";
import CharacterCard from "../CharacterCard";

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Props {
  characters: Array<Character>;
  info: Info;
  initialPage: number;
}

export default function CharactersList({
  characters,
  info,
  initialPage,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollPast, setCanScrollPast] = useState(false);
  const [canScrollPast2, setCanScrollPast2] = useState(false);
  const [scrollPastHeight, setScrollPastHeight] = useState("100px");

  const lastCharacterRef = useRef<HTMLDivElement>(null);
  const loadTriggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentPage = initialPage;
  const hasNextPage = currentPage < info?.pages;

  const handleNextPage = () => {
    if (!hasNextPage || isLoading) return;

    setIsLoading(true);
    const nextPage = currentPage + 1;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", nextPage.toString());

    router.push(`?${params.toString()}`);
  };

  const startPauseCountdown = () => {
    console.log("Starting pause countdown...");
    setIsPaused(true);
    setCanScrollPast(false);

    // Disable scrolling by adding CSS
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Use setTimeout instead of setInterval
    timeoutRef.current = setTimeout(() => {
      console.log("Countdown finished, enabling scroll...");

      // Re-enable scrolling
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      setIsPaused(false);
      setCanScrollPast(true);
      timeoutRef.current = null;
    }, 800); // 800ms = 0.8 seconds
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastCharacter = entries[0];
        if (lastCharacter.isIntersecting && !hasReachedBottom && !isPaused) {
          setHasReachedBottom(true);
          startPauseCountdown();
        }
      },
      {
        threshold: 1.0,
        rootMargin: "0px",
      }
    );

    const currentRef = lastCharacterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasReachedBottom, isPaused]);

  useEffect(() => {
    if (canScrollPast) {
      setScrollPastHeight("400px");
      setCanScrollPast2(true);
    }
  }, [canScrollPast]);

  useEffect(() => {
    if (!canScrollPast2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const trigger = entries[0];
        if (trigger.isIntersecting) {
          handleNextPage();
        }
      },
      {
        threshold: 1,
        rootMargin: "50px",
      }
    );

    const currentRef = loadTriggerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [canScrollPast2, handleNextPage]);

  useEffect(() => {
    setIsLoading(false);
    setHasReachedBottom(false);
    setIsPaused(false);
    setCanScrollPast(false);

    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Ensure scrolling is enabled
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }, [currentPage]);

  useEffect(() => {
    return () => {
      // Cleanup timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Re-enable scrolling if component unmounts during pause
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4} mb={8}>
        {characters.map((character) => {
          return (
            <div key={character?.id}>
              <Link href={`/character/${character.id}`}>
                <CharacterCard character={character} />
              </Link>
            </div>
          );
        })}
      </SimpleGrid>

      {hasNextPage && !isLoading && (
        <Box>
          <Box
            ref={lastCharacterRef}
            height="120px"
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            bg="gray.800"
            borderRadius="md"
            border="1px dashed"
            borderColor="gray.600"
            opacity={1}
            transition="opacity 0.3s ease"
          >
            <Text color="gray.400" fontSize="sm" textAlign="center">
              {`Keep scrolling to load more...(Page ${currentPage}/${info?.pages})`}
            </Text>
            <Icon color="gray.500" width={5} height={5} mt={2}>
              <LuCircleChevronDown />
            </Icon>
          </Box>
        </Box>
      )}

      {isLoading && (
        <Center py={8}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Spinner size="xl" color="brand.500" mb={4} />
            <Text color="gray.400" fontSize="lg">
              Loading more characters...
            </Text>
          </Box>
        </Center>
      )}

      <div
        ref={loadTriggerRef}
        style={{
          height: scrollPastHeight,
          backgroundColor: "transparent",
        }}
      />

      {!hasNextPage && (
        <Center py={8}>
          <Box p={6} bg="gray.800" borderRadius="lg" textAlign="center">
            <Text color="gray.400" fontSize="lg" mb={2}>
              You have seen all {info?.count} characters!
            </Text>
            <Text color="gray.500" fontSize="sm">
              That is it for now. Come back later for more updates!
            </Text>
          </Box>
        </Center>
      )}
    </>
  );
}
