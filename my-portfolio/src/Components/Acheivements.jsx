import React from "react";
import { Flex, Box, Text, Image, Tooltip } from "@chakra-ui/react";

const Achievements = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      height="auto"
    >
      <Flex
        direction="column"
        flex="1"
        p="5rem"
        bgColor="gray.700"
        color="whitesmoke"
        m={{ base: "0.5rem", md: "5rem" }}
        borderRadius="8px"
      >
        <Text fontWeight="bold" fontSize={{ base: "1.5rem", md: "2rem" }} mb={4}>
          ACHIEVEMENTS
        </Text>
        <ul style={{ fontSize: { base: "16px", md: "18px" }}}>
          <li>Solved 640+ Problems on Leetcode | Maximum Rating 1619</li>
          <li>2 STAR on CodeChef | Maximum Rating 1541</li>
          <li>
            Global Rank 99 in Starters 105 Div C and Global Rank 44 in Starters
            76 Div D.
          </li>
          <li>5 STAR on Hackerrank in Problem Solving</li>
          <li>Ranked 10th in Smart Interviews ICPC Coding Contest</li>
          <li>
            Received Certificate of Recognition from college for being topper in
            academics of II Year II Sem.
          </li>
        </ul>
      </Flex>
      <Flex
        direction="column"
        flex="1"
        p={4}
        bgColor="gray.700"
        color="whitesmoke"
        m={{ base: "0.5rem", md: "5rem" }}
        borderRadius="8px"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Text fontWeight="bold" fontSize={{ base: "1.5rem", md: "2rem" }} mb={4}>
          CODING PROFILES
        </Text>

        <Tooltip
          label="Visit my Leetcode Profile"
          fontSize="sm"
          placement="right"
          hasArrow
          bg="whitesmoke"
          color="gray.700"
        >
          <Box
            mb={4}
            borderRadius="8px"
            bgColor="white"
            onClick={() => window.open("http://leetcode.com/karthika_49/")}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Image src="/assets/leetcode.png" alt="Leetcode" height="5rem" />
            <Text textAlign="center" color="gray.900">
              Leetcode
            </Text>
          </Box>
        </Tooltip>

        <Tooltip
          label="Visit my CodeChef Profile"
          fontSize="sm"
          placement="right"
          hasArrow
          bg="whitesmoke"
          color="gray.700"
        >
          <Box
            mb={4}
            borderRadius="8px"
            bgColor="white"
            onClick={() => window.open("http://codechef.com/users/karthika_49")}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Image src="/assets/codechef.png" alt="CodeChef" height="5rem" />
            <Text textAlign="center" color="gray.900">
              CodeChef
            </Text>
          </Box>
        </Tooltip>

 
        <Tooltip
          label="Visit my Hackerrank Profile"
          fontSize="sm"
          placement="right"
          hasArrow
          bg="whitesmoke"
          color="gray.700"
        >
          <Box
            mb={4}
            borderRadius="8px"
            bgColor="white"
            onClick={() => window.open("https://www.hackerrank.com/karthika_49?hr_r=1")}
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Image src="/assets/hackerrank.png" alt="Hackerrank" height="5rem" />
            <Text textAlign="center" color="gray.900">
              Hackerrank
            </Text>
          </Box>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Achievements;
