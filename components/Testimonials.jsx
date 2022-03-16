import { useCallback, useEffect, useState } from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Container from "./Container";
import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";
import TestimonialArrow from "./TestimonialArrow";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Testimonials = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    index => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const testimonials = [
    {
      name: "Longe Ekeso",
      content:
        "Ben is a really professional guy, takes tasks seriously and always gets them done in a timely fashion.",
    },
    {
      name: "Longe Ekeso",
      content:
        "Ben is a really professional guy, takes tasks seriously and always gets them done in a timely fashion.",
    },
    {
      name: "Longe Ekeso",
      content:
        "Ben is a really professional guy, takes tasks seriously and always gets them done in a timely fashion.",
    },
    {
      name: "Longe Ekeso",
      content:
        "Ben is a really professional guy, takes tasks seriously and always gets them done in a timely fashion.",
    },
  ];
  return (
    <Box py={10} {...props}>
      <Container>
        <Heading mb={10} size="2xl">
          Testimonials
        </Heading>
        <Box position="relative" overflow="hidden" ref={viewportRef}>
          <Flex>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                scrollPrev={scrollPrev}
                scrollNext={scrollNext}
                prevBtnEnabled={prevBtnEnabled}
                nextBtnEnabled={nextBtnEnabled}
                key={index}
                testimonial={testimonial}
              />
            ))}
          </Flex>
          <TestimonialArrow
            left={0}
            onClick={scrollPrev}
            enabled={prevBtnEnabled}
            icon={<ChevronLeftIcon boxSize="50px" />}
          />
          <TestimonialArrow
            right={0}
            onClick={scrollNext}
            enabled={nextBtnEnabled}
            icon={<ChevronRightIcon boxSize="50px" />}
          />
        </Box>
        <Flex justify="center" gap="14px">
          {scrollSnaps.map((_, index) => (
            <Box
              cursor={index === selectedIndex ? "not-allowed" : "pointer"}
              borderRadius="full"
              boxSize="14px"
              bg={
                colorMode === "dark"
                  ? index === selectedIndex
                    ? "blue.500"
                    : "blue.200"
                  : index === selectedIndex
                  ? "blue.700"
                  : "blue.500"
              }
              key={index}
              onClick={() => scrollTo(index)}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonials;
