import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

type InfoProps = {

};

const Info: React.FC<InfoProps> = () => {

    return (
        <>
            <Box width={{ sm: "300px", md: "300px", lg: "400px" }} align="left" fontSize={{sm:"15px", md:"17px", lg:"18px"} }>
                <Text align={"center"} fontSize={['', '20px', '30px', '40px']} color={"brand.100"} fontWeight={700} paddingBottom={5}>Say Hello!</Text>

                <Text>I am based out of Bengaluru, India. Feel free to reach out to me for any hackathon or project collaboration. </Text>
                <br />
                <Text>Apart from tech, I love running, reading, writing and dancing and am always open to explore many activities.</Text>
                <br></br>
                <Link href="https://www.goodreads.com/user/show/141296416-sharayu-s" target="_blank">Ask me for book recommendations.</Link>
            </Box>

        </>
    )
}
export default Info;