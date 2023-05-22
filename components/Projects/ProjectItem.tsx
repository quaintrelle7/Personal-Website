import { GridItem, Box, Button, Image, Stack, Center, Link, Text } from '@chakra-ui/react';
import { StaticImageData } from 'next/image';
import React from 'react';
// import Image from 'next/image';


type ProjectItemProps = {
    title: String,
    subtitle: String,
    description:
    String,
    image: String,
    link: String,
};

const ProjectItem: React.FC<ProjectItemProps> = ({ title, subtitle, description, image, link }) => {

    return (

        <GridItem height={"200px"} alignItems={"center"} width={{ base: "70vw", md: "300px", lg: "28vw" }} >

            <Image width={{ base: "70vw", md: "300px", lg: "28vw" }} height={"200px"} alt="" position="absolute"
                borderRadius={"15px"}

                src={image as string} />
            {/* <a href="https://imgbb.com/"><img src= alt="Indigo-and-Blue-Modern-Gradient-Doctor-Health-Logo-7" border="0"></a>   */}

            <Center position="relative" height={"200px"} opacity={0} alignItems={"center"} bg={"Red"} borderRadius={"15px"} _hover={{ opacity: "100", bg: "brand.100" }} transition={"0.45s ease-in-out"} >
                <Stack alignItems={"center"} fontWeight={700}>
                    <Text color={"black"}>{subtitle}</Text>
                    <Link href={link as string} target='_blank'><Button>Visit here</Button></Link>
                </Stack>

            </Center>



        </GridItem>


    )
}
export default ProjectItem;

// height = { "200px"} alignItems = { "center"} width = {{ sm: "70vw", md: "300px", lg: "28vw" }} borderRadius = { "15px"} _hover = {{ bg: "brand.100", visibility: "none" }} transition = { "0.45s ease-in-out"}