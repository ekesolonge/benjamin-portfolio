import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

const AppImage = ({ src, layout, objectFit, alt, ...props }) => {
  return (
    <Box position="relative" overflow="hidden" {...props}>
      <NextImage src={src} layout={layout} objectFit={objectFit} alt={alt} />
    </Box>
  );
};

export default AppImage;
