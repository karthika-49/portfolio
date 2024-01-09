import React from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const AnimatedText = motion(Text);

const AboutMe = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }} 
      height={{ base: 'auto', md: '90vh' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      overflow='hidden'
    >
      <Flex
        mx={{ base: '0', md: '40px' }}
        mt={{ base: '0', md: '30vh' }}
        direction="column"
        width={{ base: '100%', md: '50vw' }} 
        p={4}
      >
        <AnimatedText
          fontSize={{ base: '24px', md: '40px' }} 
          fontWeight="bold"
          mb="2px"
          variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          Hey there!
        </AnimatedText>
        <Text fontSize={{ base: '36px', md: '50px' }} color ='orange'fontWeight="bold" mb="2px">
          I'm Karthika Bingi
        </Text>
        <Text fontSize={{ base: '18px', md: 'xl' }} fontWeight="bold" mb="2px">
          Welcome to my portfolio
        </Text>
      </Flex>
      <Flex
        mr={{ base: '0', md: '30px' }}
        mt={{ base: '0', md: '30vh' }}
        direction="column"
        width={{ base: '100%', md: '50vw' }} 
        justifyContent={{ base: 'center', md: 'flex-start' }} 
        p={4}
      >
        <Text mb={4}  fontSize={'20px'}>
          I'm a computer science student passionate about technology, currently pursuing a BTech in Computer Science and Engineering. I love solving problems and have tackled over 640 challenges on LeetCode, achieving a maximum rating of 1619. My journey involves a mix of academic learning and practical experience in the MERN stack, connecting theoretical knowledge with real-world applications.
        </Text>
        <Box>
          <Button colorScheme="linkedin" mt={4} mr={4} onClick={() => window.open('https://drive.google.com/uc?id=1dY-yZAQndhwch85JdpfOnlO_844Eqfwf', '_blank')}>
            View Resume
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
