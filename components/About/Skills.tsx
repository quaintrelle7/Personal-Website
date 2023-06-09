import { Stack, Flex, Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

type SkillsProps = {

};

const Skills: React.FC<SkillsProps> = () => {

    const webDevList = ['ReactJS', 'NextJS', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Chakra']
    const langList = ['C++', 'Solidity', 'PostgreSQL']
    const otherList = ['Ethereum', 'Blockchain', 'Outsystems', 'Web3.js', 'Django']

    return (
        <>

            <Box>
                <Grid templateColumns={{
                    base: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)'
                }} gap={{ base: 6, md: 8, lg: 10 }} py={6} >

                    {
                        webDevList.map((item) => (
                            <GridItem key={item} bg={"brand.100"} color={"black"} borderRadius={5} padding={2} width={"150"} fontWeight={600} textAlign={"center"}>
                                {item}
                            </GridItem>
                        ))
                    }

                    {
                        langList.map((item) => (
                            <GridItem key={item} bg={"teal.300"} color={"black"} borderRadius={5} padding={2} width={"150"} fontWeight={600} textAlign={"center"}>
                                {item}
                            </GridItem>
                        ))
                    }
                    {
                        otherList.map((item) => (
                            <GridItem key={item} bg={"teal.200"} color={"black"} borderRadius={5} padding={2} width={"150"} fontWeight={600} textAlign={"center"}>
                                {item}
                            </GridItem>
                        ))
                    }



                </Grid>
            </Box>
        </>
    )
}
export default Skills;