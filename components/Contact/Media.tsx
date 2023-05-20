import { Stack, Icon, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiFillMediumCircle } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import { SiHashnode } from "react-icons/si"
type MediaProps = {


};

const Media: React.FC<MediaProps> = () => {

    return (
        <>
            <Flex
            
                marginBottom={{sm:10, lg:0}} justifyContent={"space-between"} marginTop={{sm:5, lg:12}} width={{ sm: "300px", md: "300px", lg: "300px" }} align={"center"} >
                <Link href='https://www.linkedin.com/in/sharayushendre/' target='_blank'>

                    <Icon fontSize={30} color={'brand.100'} borderRadius={'full'} as={AiFillLinkedin} />

                </Link>

                <Link href='https://twitter.com/qua_intrelle7' target='_blank'>
                    <Icon fontSize={30} color={'brand.100'} borderRadius={'full'} as={AiFillTwitterCircle} /></Link>


                <Link href='https://github.com/quaintrelle7' target='_blank'>
                    <Icon fontSize={30} color={'brand.100'} borderRadius={'full'} as={AiFillGithub} />
                </Link>

                <Link href='https://quaintrelle7.medium.com/' target='_blank'>
                    <Icon fontSize={30} color={'brand.100'} borderRadius={'full'} as={AiFillMediumCircle} /></Link>

                <Link href='https://discord.com/users/qua_intrelle7#9505' target='_blank'>
                    <Icon fontSize={30} color={'brand.100'} borderRadius={'full'} as={BsDiscord} /></Link>

                <Link href='https://hashnode.com/@quaintrelle7' target='_blank'>
                    <Icon fontSize={30} color={'brand.100'} borderRadius={'full'} as={SiHashnode} /> </Link>
            </Flex>
        </>
    )
}
export default Media;