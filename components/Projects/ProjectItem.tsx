import { GridItem, Box, Button, Image, Stack, Center, Link, Text, Heading } from '@chakra-ui/react';
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

        <GridItem height={"200px"} alignItems={"center"} width={{ base: "80vw", sm: "70vw", md: "300px", lg: "28vw" }} borderRadius={"15px"}
          
            boxShadow="0 1.8px 1px #2aaa8a,
  0 2px 2px #2aaa8a,
  0 2px 2px #2aaa8a,
  0 0px 6.9px #2aaa8a,
  0 1.8px 10.4px #2aaa8a,
  0 1px 1px #2aaa8a" >

            <Image width={{ base: "80vw", sm: "70vw", md: "300px", lg: "28vw" }} height={"200px"} alt={title as string} position="absolute"
                borderRadius={"15px"}

                src={image as string} />
            <Center width={{ base: "80vw", sm: "70vw", md: "300px", lg: "28vw" }} height={"200px"} position={"absolute"} >
                <Heading textShadow= "#FC0 1px 0 10px" fontSize={['2xl', '30px', '30px', '30px']} overflowWrap={"break-word"}>{title}</Heading>

            </Center>


            <Center position="relative" height={"200px"} opacity={0} alignItems={"center"} bg={"Red"} borderRadius={"15px"} _hover={{ opacity: "100", bg: "brand.100" }} transition={"0.45s ease-in-out"} >
                <Stack alignItems={"center"} fontWeight={700} >
                    <Text align={"center"} color={"black"}>{subtitle}</Text>
                    <Link href={link as string} target='_blank'><Button>Visit here</Button></Link>
                </Stack>

            </Center>



        </GridItem>


    )
}
export default ProjectItem;

