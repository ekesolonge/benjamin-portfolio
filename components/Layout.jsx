import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box id="home" minH="100vh">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
