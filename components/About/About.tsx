import { Box, Center, Flex, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

type AboutProps = {

};

const About: React.FC<AboutProps> = () => {

    return <div style={{
        marginTop: "0px"
    }}>

        <Center id="About" bg="#051411" width={"100%"} color={"white"} height={{ base: "100%", sm:"400px", md: "600px", lg: "700px" }} px={6} py={6}>

            <Flex display={{ base: "none", md: "flex"}} justifyContent={"space-around"}>
                <Stack marginTop={10}>
                    <Text fontSize={{ base: "3xl", sm:"3xl", md: "50px", lg: "100px" }}>Hello!</Text>

                    <Flex fontWeight={700} fontSize={{base:'2xl',md: '30px', lg:'40px'}} >

                        <Text> I am </Text>

                        <Text color="brand.100" marginLeft={{base:"1", sm:"1", md: '1' , lg:'3'}}>  Sharayu S</Text>
                    </Flex>

                    <Text>A Professional Software Developer</Text>
                </Stack>
                <Box marginLeft={20}>
                    <Image borderRadius={15} width={{ base: "300px", sm: "300px", md: "300px", lg: "350px" }}src="/Profile-Picture.jpg" alt="Sharayu's Photo">

                    </Image>
                </Box>
            </Flex>


{/* For Phone */}

            <Flex display={{ md: "none", base: "flex" }} justifyContent={"space-around"}>
                <Stack>
                    <Box my={10}>
                        <Image borderRadius={6} width={{ base: "290px", sm: "300px", md: "300px", lg: "300px" }} src="/Profile-Picture.jpg" alt="Sharayu's Photo">

                        </Image>
                    </Box>

                    
                    <Text align = "center" fontSize={{ base: "3xl", sm: "3xl", md: "50px", lg: "100px" }}>Hello!</Text>

                    <Flex fontWeight={700} fontSize={{ base: '2xl', md: '30px', lg: '40px' }} justifyContent={"center"} >

                        <Text align="center" > I am </Text>

                        <Text color="brand.100" marginLeft={{ base: "1", sm: "1.2", md: '1', lg: '3' }}>  Sharayu S</Text>
                    </Flex>

                    <Text align="center" >Professional Software Developer</Text>
                </Stack>
                
            </Flex>

        </Center >



    </div >
}
export default About;