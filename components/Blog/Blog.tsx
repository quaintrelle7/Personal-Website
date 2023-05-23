import { Box, Stack, Grid, Text, GridItem, Button, Avatar, Heading, Center, Image, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import BlogItem from './BlogItem';
import { blogs } from './BlogData';

type BlogProps = {

};

const Blog: React.FC<BlogProps> = () => {


    const animals = [
        { id: 1, animal: "Dog" },
        { id: 2, animal: "Bird" },
        { id: 3, animal: "Cat" },


    ];


    return (
        <Box id="Blog" bg="black" width={"100%"} color={"white"} height={{ sm: "100%", md: "100%", lg: "900px" }} py={{ base: "15vw", lg: "5vw" }} px={"5vw"} >

            <Stack align={"center"} >
                <Text fontSize={['2xl', '30px', '30px', '30px']} color={"brand.100"} fontWeight={700} align={"center"}>Lastest Blogs & Articles</Text>
                <Text>Here are a few blogs I have written. Want to see more? <Link href='https://quaintrelle7.medium.com/' target="_blank" color={"brand.100"}>Visit here.</Link></Text>
                <Grid templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }} gap={{ sm: 6, md: 8, lg: 8 }} alignContent={"center"} py={6} >


                    <>


                        {blogs.map(item => (
                            <BlogItem key={item.title} title = {item.title} image={item.image} link={item.link} desc={item.desc} date={item.date} time={item.time} />

                        ))}



                    </>

                </Grid>
            </Stack>
        </Box>


    )
}
export default Blog;