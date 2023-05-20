import React from 'react';
import ContactForm from './ContactForm';
import { Box, Flex, Grid, Stack, Text } from '@chakra-ui/react';
import Media from './Media';
import Info from './Info';

type ContactProps = {

};

const Contact: React.FC<ContactProps> = () => {

    return (
        <> <Grid templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)'
        }} gap={6} bg="#051411" width={"100%"} color={"white"} height={{ sm: "100%", md: "100%", lg: "100%" }} justifyContent={"space-around"} py="5vw" px="5vw">

            <Stack >
                <Box align="center">
                    <Info />

                  
                    <Media />
                </Box>


            </Stack>
            <Box align="center" >
                <ContactForm />
            </Box>
        </Grid>






        </>
    )
}
export default Contact;