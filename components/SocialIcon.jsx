import { IconButton, Link } from "@chakra-ui/react";

const SocialIcon = ({ icon, ...props }) => {
  return (
    <Link isExternal {...props}>
      <IconButton variant="ghost" icon={icon} />
    </Link>
  );
};

export default SocialIcon;
