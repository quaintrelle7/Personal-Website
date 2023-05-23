import { Box, Link, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { BsArrowUpRightSquareFill } from "react-icons/bs"

type InfoProps = {

};

const Info: React.FC<InfoProps> = () => {

    return (
        <>
            <Box width={{ base: "270px", sm: "300px", md: "300px", lg: "400px" }} fontSize={{ base: "15px" , sm: "15px", md: "17px", lg: "18px" }}>
                <Text align={"center"} fontSize={['2xl', '30px', '30px', '30px']} color={"brand.100"} fontWeight={700} paddingBottom={5}>Say Hello!</Text>

                <Text align="left">I am based out of Bengaluru, India. Feel free to reach out to me for any hackathon or project collaboration. </Text>
                <br />
                <Text align="left">Apart from tech, I love running, reading, writing and dancing and am always open to explore many activities.</Text>
                <br></br>
                <Link href="https://www.goodreads.com/user/show/141296416-sharayu-s" target="_blank"> <Text textDecoration={"underline"} align={"left"}>Ask me for book recommendations here. </Text></Link>
            </Box>

        </>
    )
}
export default Info;