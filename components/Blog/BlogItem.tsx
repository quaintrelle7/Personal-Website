import { Box, Center, Stack, Heading, Avatar, Text, Image, Link } from '@chakra-ui/react';
import React from 'react';

type BlogItemProps = {
    title: String,
    image: String,
    link: String,
    desc:
    String,

};

const BlogItem: React.FC<BlogItemProps> = ({ title, image, link, desc }) => {

    return (
        <Link href={link as string} target="_blank">
            <Box >
                <Center py={6} width={{ sm: "70vw", md: "28vw", lg: "28vw" }} > <Box


                    bg={"white"}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>

                    <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                    >
                        <Image
                            src={
                                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                            alt='image'

                        />
                    </Box>
                    <Stack height={{ sm: "40vw", md: "48vw", lg: "13vw" }}>
                        <Text
                            mt={{ base: "-10px", lg: "30px" }}
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            Blog
                        </Text>
                        
                        <Heading

                            color={('black')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {title}
                        </Heading>
                        <br/>
                        <Text style={{

                            overflowWrap: "break-word"
                        }} color={'gray.500'}>
                            {desc}
                        </Text>
                    </Stack>
                    <Stack mt={7} direction={'row'} spacing={4} align={'center'} >

                        {/* <Avatar
                        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        name={'Author'}
                    /> */}
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>Achim Rolle</Text>
                            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                        </Stack>
                    </Stack>
                </Box>

                </Center>
            </Box >

        </Link>
    )
}
export default BlogItem;