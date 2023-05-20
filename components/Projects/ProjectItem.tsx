import { GridItem, Box, Button } from '@chakra-ui/react';
import React from 'react';

type ProjectItemProps = {

};

const ProjectItem: React.FC<ProjectItemProps> = () => {

    return (
        <>
            <GridItem height={"200px"} align={"center"} width={{ sm: "70vw", md: "300px", lg: "28vw" }} bg={"green"} borderRadius={"15px"} _hover={{ bg: "brand.100", visibility: "none" }} transition={"0.45s ease-in-out"}>

                <Box height={"200px"} opacity={0} align={"center"} bg={"Red"} borderRadius={"15px"} _hover={{ opacity: "100" }} >
                    Hi
                    <Button>Visit</Button>
                </Box>

            </GridItem>

        </>
    )
}
export default ProjectItem;