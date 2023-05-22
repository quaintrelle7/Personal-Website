import React from 'react';
import { Box, Center, Flex, Stack, Text, Image, Grid, GridItem, Divider, Container, Button, Link } from '@chakra-ui/react';
import ProjectItem from './ProjectItem';
import { projects } from './ProjectsData';
import Background from "../../public/Crowdfund.png"


type ProjectsProps = {

};

const Projects: React.FC<ProjectsProps> = () => {
    const animals = [
        { id: 1, animal: "Dog" },
        { id: 2, animal: "Bird" },
        { id: 3, animal: "Cat" },


    ];

    return (
        <>
            <Box bg="#051411" width={"100%"} color={"white"} height={{ base: "100%", md: "100%", lg: "800px" }} py={"5vw"} px={"5vw"}>

                <Stack align={"center"} >
                    <Text fontSize={['20px', '20px', '30px', '40px']} color={"brand.100"} fontWeight={700} align={"center"}>My Recent Work</Text>
                    <Text>Here are a few past design projects I have worked on. Want to see more? <Link href='https://github.com/quaintrelle7' target="_blank" color={"brand.100"}>Visit Github. </Link></Text>
                    <Grid templateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)'
                    }} gap={{ base: 6, md: 8, lg: 10 }} alignItems={"center"} py={6} >



                        <>
                            {projects.map(item =>
                                <>
                                    <ProjectItem key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} description={item.description} link={item.link} />


                                </>

                            )

                            }


                        </>


                    </Grid>
                </Stack>
            </Box>


        </>)
}
export default Projects;