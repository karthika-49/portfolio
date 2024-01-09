import React from "react";
import { Grid, Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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



const Projects = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={4}
      height="90vh"
      justifyContent="center"
      p={4}
      // overflowY={'hidden'}
    >
      {projectsData.map((project, index) => (
        <Box
          key={index}
          p={4}
          borderRadius="md"
          textAlign="center"
          boxSize={{ base: "100%", md: "65%" }}
          mx={{ base: "0", md: "8rem" }}
          mt="25px"
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Link as={RouterLink} to={`/project/${project.name}`} _hover={{transform:"none"}}>
            <img
              src={`/assets/${project.thumbnail}`}
              alt={project.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "5px",
                border: "2px solid gray",
              }}
            />
            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
              {project.name}
            </Text>
          </Link>
        </Box>
      ))}
    </Grid>
  );
};

export default Projects;
