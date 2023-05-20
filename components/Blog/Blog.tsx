import { Box, Stack, Grid, Text, GridItem, Button, Avatar, Heading, Center, Image, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import BlogItem from './BlogItem';

type BlogProps = {

};

const Blog: React.FC<BlogProps> = () => {


    const animals = [
        { id: 1, animal: "Dog" },
        { id: 2, animal: "Bird" },
        { id: 3, animal: "Cat" },


    ];


    return (
        <Box bg="black" width={"100%"} color={"white"} height={{ sm: "100%", md: "100%", lg: "800px" }} py={"5vw"} px={"5vw"} >

            <Stack align={"center"} >
                <Text fontSize={['', '20px', '30px', '40px']} color={"brand.100"} fontWeight={700} align={"center"}>Lastest Blogs & Articles</Text>
                <Text>Here are a few blogs I've written. Want to see more? <Link href='https://quaintrelle7.medium.com/' target="_blank" color={"brand.100"}>Visit here.</Link></Text>
                <Grid templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }} gap={{ sm: 6, md: 8, lg: 8 }} align={"center"} py={6} >


                    <>


                        {animals.map(item => (
                            <BlogItem key={item.id} />

                        ))}



                    </>

                </Grid>
            </Stack>
        </Box>


    )
}
export default Blog;