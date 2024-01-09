import React from 'react';
import { motion } from 'framer-motion';
import { Stack, Box, Text } from '@chakra-ui/react';

const Skills = () => {
  const skillsData = {
    Languages: ['Java', 'C', 'Python'],
    Technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'ReactJS', 'Chakra UI', 'NodeJS', 'ExpressJS', 'MongoDB'],
    Coursework: ['Data Structures and Algorithms', 'Object Oriented Programming', 'Database Management Systems'],
    Tools: ['Visual Studio Code', 'MySQL Workbench', 'Git', 'Firebase', 'Postman', 'Github'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const boxVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillBoxStyle = {
    width: 'auto',
    bg: 'gray.700',
    color:'whitesmoke',
    borderRadius: '8px',
    p: '4',
    mb: '4',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    _hover: {
      bg : 'gray.600',
      transform: 'scale(1.1)',
    }
  };

  return (
    <Stack align="center" justify="center" spacing={4} h="90vh"  px={'2vw'}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={index}
            variants={boxVariants}
          >
            <Box {...skillBoxStyle}>
              <Text fontWeight="bold" fontSize={"25px"}>{category} </Text>
              <Text mt={"5px"}>{skills.join(', ')}</Text>
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </Stack>
  );
};

export default Skills;
