import { Link, useColorModeValue } from "@chakra-ui/react";

const NavItems = ({ title, link, ...props }) => {
  return (
    <Link
      fontWeight="500"
      href={link}
      _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
      {...props}
    >
      {title}
    </Link>
  );
};

export default NavItems;
