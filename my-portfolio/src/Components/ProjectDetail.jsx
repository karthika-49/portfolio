import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Image, Link, Flex, Button } from "@chakra-ui/react";

const ProjectDetail = () => {
  const { name } = useParams();
  console.log(name);

  const projectsData = [
    {
      name: "Class Library",
      description:
        "Developed a MERN stack web application for uploading, storing, displaying, and deleting PDFs of various subjects. Used Multer for file uploads and JWT Authentication for user authentication. Tech Stack: ReactJS, NodeJS, ExpressJS, MongoDB, HTML, CSS, Javascript.",
      liveLink: "https://classlibrary.netlify.app/",
      codeLink: "https://github.com/karthika-49/classlibrary",
      thumbnail: "class_library_thumbnail.png",
    },
    {
      name: "Code Farm",
      description:
        "Developed a coding platform where users can submit solutions for a problem. Used ExpressJS, NodeJS, MongoDB for the backend, and ReactJS for the frontend. Implemented user authentication with JWT. Tech Stack: ReactJS, NodeJS, ExpressJS, MongoDB, HTML, CSS, Javascript.",
      liveLink: "https://codefarm.netlify.app/",
      codeLink: "https://github.com/karthika-49/codefarm",
      thumbnail: "code_farm_thumbnail.png",
    },
    {
      name: "Art Blogging Web Application",
      description:
        "Built a Full Stack Art blogging web application. Allows users to upload videos of different art categories and share with friends. Tech Stack: ReactJS, ChakraUI, Firebase.",
      liveLink: "https://videoblogapp-c4dc0.web.app",
      codeLink: "https://github.com/karthika-49/artblogging",
      thumbnail: "art_blogging_thumbnail.png",
    },
    {
      name: "My Diary Website",
      description:
        "A user-friendly website for penning down goals, notes, journals with a great user interface. Tech Stack: HTML, CSS, Javascript.",
      liveLink: "https://my-diary-live.netlify.app/",
      codeLink: "https://github.com/karthika-49/mydiary",
      thumbnail: "my_diary_thumbnail.png",
    },
  ];

  const project = projectsData.find((project) => project.name === name);

  if (!project) {
    return (
      <Box>
        <Text>No project found with the name {name}</Text>
      </Box>
    );
  }
  const descriptionPoints = project.description.split(". ");
  return (
    <Box p={4} borderRadius="md" direction="column" height={{ base: "auto", md: "100vh" }}  overflowY={'hidden'}>
    <Flex justifyContent="center" alignItems="center" mb={{ base: 2, md: 10 }}>
      <Image
        src={`/assets/${project.thumbnail}`}
        alt={project.name}
        borderRadius="8px"
        alignSelf="center"
        boxSize={{ base: "100%", md: "50%" }}
        height="auto"
        border="2px solid gray"
      />
    </Flex>
    <Flex direction="column" align="center">
      <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
        {name}
      </Text>
      <Text fontStyle="italic">
        {descriptionPoints.map((point, index) => (
          <span key={index}>
            <Box as="span" display="flex" alignItems="center">
              <Text as="span" fontWeight="bold" marginRight="4px">
                •
              </Text>
              {point.trim()}
            </Box>
            {index !== descriptionPoints.length - 1 && <br />}
          </span>
        ))}
      </Text>
      <Flex mt={{ base: "10px", md: "20px" }}>
        <Link href={project.liveLink} color="whitesmoke" isExternal _hover={{ transform: "none" }}>
          <Button mx={{ base: "5px", md: "10px" }} colorScheme="linkedin">
            Live
          </Button>
        </Link>
        <Link href={project.codeLink} color="whitesmoke" isExternal _hover={{ transform: "none" }}>
          <Button colorScheme="linkedin">Code</Button>
        </Link>
      </Flex>
    </Flex>
  </Box>
  );
};

export default ProjectDetail;
