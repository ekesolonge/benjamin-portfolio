import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

const Image = ({ src, layout, fit, alt, ...props }) => {
  return (
    <Box position="relative" overflow="hidden" {...props}>
      <NextImage src={src} layout={layout} objectFit={fit} alt={alt} />
    </Box>
  );
};

export default Image;
