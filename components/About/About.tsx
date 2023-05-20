import { Box, Center, Flex, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

type AboutProps = {

};

const About: React.FC<AboutProps> = () => {

    return <div style={{
        marginTop: "0px"
    }}>

        <Center bg="#051411" width={"100%"} color={"white"} height={{ sm: "400px", md: "600px", lg: "700px" }}>

            <Flex justifyContent={"space-around"}>
                <Stack>
                    <Text fontSize={{ sm: "20px", md: "50px", lg: "100px" }}>Hello!</Text>
                    <Flex fontWeight={700} fontSize={['', '20px', '30px', '40px']} >

                        <Text> I am </Text>
                        <Text color="brand.100" marginLeft={['', '1', '3']}>  Sharayu S</Text>
                    </Flex>

                    <Text>Professional Software Developer</Text>
                </Stack>
                <Box>
                    <Image src="" alt="Sharayu's Photo">

                    </Image>
                </Box>
            </Flex>

        </Center >



    </div >
}
export default About;