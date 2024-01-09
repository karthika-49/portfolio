import React from 'react';
import { Box, Heading, Flex, IconButton, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const iconVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };

  return (
    <Box p={8} textAlign="center" height={"90vh"} paddingTop={"30vh"} >
      <Heading mb={4}>Contact</Heading>
      <Text fontSize={"20px"}>Let's Connect and Collaborate!</Text>
      <Flex align="center" justify="center" mt={"4rem"}>
        <motion.div variants={iconVariants} initial="initial" animate="animate">
          <IconButton
            as="a"
            href="https://github.com/karthika-49"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            fontSize="32px"
            mr={5}
          />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate">
          <IconButton
            as="a"
            href="https://linkedin.com/in/karthikabingi"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            fontSize="32px"
            mr={5}
          />
        </motion.div>
        
        <motion.div variants={iconVariants} initial="initial" animate="animate">
          <IconButton
            as="a"
            href="https://twitter.com/karthika_49"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            fontSize="32px"
            mr={5}
          />
        </motion.div>
        <motion.div variants={iconVariants} initial="initial" animate="animate">
          <IconButton
            as="a"
            href="https://www.facebook.com/profile.php?id=100079079083180&mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            fontSize="32px"
          />
        </motion.div>
      </Flex>
        <Text fontSize={"20px"} mt={"2rem"}>Email id: bingikarthika@gmail.com</Text>
    </Box>
  );
};

export default Contact;
