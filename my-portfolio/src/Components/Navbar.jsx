import React, { useState } from 'react';
import { Flex, Link as ChakraLink, IconButton, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Flex
      bg="gray.800"
      p={5}
      color="white"
      alignItems="center"
      justifyContent="space-between"
    >
      <ChakraLink
        as={RouterLink}
        to="/"
        fontSize="xl"
        fontWeight="bold"
        _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
        width="25vw"
      >
        My Portfolio
      </ChakraLink>

      {isSmallerScreen ? (
        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          size="lg"
          onClick={handleMenuToggle}
        />
      ) : (
        <Flex justifyContent="space-around" width="60vw">
          <ChakraLink
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
            _focus={{ borderBottom: '2px', borderColor: 'whitesmoke' }}
          >
            About Me
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/skills"
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
            _focus={{ borderBottom: '2px', borderColor: 'whitesmoke' }}
          >
            Skills
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/projects"
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
            _focus={{ borderBottom: '2px', borderColor: 'whitesmoke' }}
          >
            Projects
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/achievements"
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
            _focus={{ borderBottom: '2px', borderColor: 'whitesmoke' }}
          >
            Achievements
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/contact"
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
            _focus={{ borderBottom: '2px', borderColor: 'whitesmoke' }}
          >
            Contact
          </ChakraLink>
        </Flex>
      )}

      {isMenuOpen && isSmallerScreen && (
        <Flex
          direction="column"
          position="absolute"
          top="60px"
          right="0"
          bg="gray.100"
          p={2}
          color={'gray.800'}
          borderRadius="md"
          onClick={closeMenu}
        >
          <ChakraLink
            as={RouterLink}
            to="/"
            mb={2}
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
          >
            About Me
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/skills"
            mb={2}
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
          >
            Skills
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/projects"
            mb={2}
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
          >
            Projects
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/achievements"
            mb={2}
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
          >
            Achievements
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/contact"
            _hover={{ textDecoration: 'none', color: 'whitesmoke' }}
          >
            Contact
          </ChakraLink>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
