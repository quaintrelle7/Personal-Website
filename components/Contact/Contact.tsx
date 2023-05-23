import React from 'react';
import ContactForm from './ContactForm';
import { Box, Flex, Grid, Stack, Text } from '@chakra-ui/react';
import Media from './Media';
import Info from './Info';

type ContactProps = {

};

const Contact: React.FC<ContactProps> = () => {

    return (
        <> <Grid id ="Contact" templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)'
        }} gap={6} bg="#051411" width={"100%"} color={"white"} height={{ sm: "100%", md: "100%", lg: "100%" }} justifyContent={"space-around"} py={{ base: "15vw", lg: "5vw" }} px="5vw">

            <Stack alignItems={"center"} >
               
                <Box><Info /></Box>


                <Box><Media /></Box>  
             


            </Stack>
            <Flex justifyContent={"center"} >
                <ContactForm />
            </Flex>
        </Grid>






        </>
    )
}
export default Contact;