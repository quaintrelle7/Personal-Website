import { Box, Center, Stack, Heading, Avatar, Text, Image } from '@chakra-ui/react';
import React from 'react';

type BlogItemProps = {

};

const BlogItem: React.FC<BlogItemProps> = () => {

    return (

        <Box>
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
                        alt='hi'

                    />
                </Box>
                <Stack>
                    <Text
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
                        Boost your conversion rate
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'} >
                   
                        <Avatar
                            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                            name={'Author'}
                        />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                </Stack>
            </Box>

            </Center>
        </Box >)
}
export default BlogItem;