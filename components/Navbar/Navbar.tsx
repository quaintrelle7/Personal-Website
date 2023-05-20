import { Button, Divider, Flex, Link } from '@chakra-ui/react';
import React, { useState } from 'react';

type NavbarProps = {
bgColor: any;

};

const Navbar: React.FC<NavbarProps> = ({bgColor}) => {

    const [showInPhone, setShowInPhone] = useState<Boolean>(false);

    const handleClick = () => {
        setShowInPhone(!showInPhone);
    }


    return <div style={{ position: "sticky",top:"0", zIndex:1 }}>


        <Flex bg={bgColor}
            height="60px"
            color="white"

            align={"center"}
            justifyContent={{ md: "space-between" }}>

            <Flex width={"50%"}
                marginLeft={20}
                fontWeight="700"
                letterSpacing={1}
                fontSize={"22px"}
                color={"#47d2af			"}>
                SHARAYU
            </Flex>

            <Flex width={"500px"}
                justifyContent={{ md: "space-between" }}
                display={{ base: "none", md: "flex" }}
                align={"flex-start"}
                mx={2}
                marginRight={20}
            >
                <Link className='navbarLink'
                    style={{ textDecoration: "none" }}>Home
                </Link>
                <Link className='navbarLink'
                    style={{ textDecoration: "none" }} >About
                </Link>
                <Link className='navbarLink'
                    style={{ textDecoration: "none" }}>Projects
                </Link>
                <Link className='navbarLink'
                    style={{ textDecoration: "none" }}>Resume
                </Link>
                <Link href='https://quaintrelle7.medium.com/' target="_blank"
                    className='navbarLink'
                    style={{ textDecoration: "none" }}>Blog
                </Link>
                <Link className='navbarLink'
                    style={{ textDecoration: "none" }}>Contact
                </Link>
            </Flex>

            <Flex display={{ md: "none" }}>
                {showInPhone ? (<Button onClick={handleClick}>Cross</Button>) : (<Button onClick={handleClick}>Lines</Button>)}


            </Flex>
        </Flex>

        < Flex zIndex={1} display={{ md: "none" }}
            width={"100%"}
        >

            {showInPhone ? (

                <Flex direction={"column"} align={"center"} width={"100%"} bg="#c2f0e4" padding={"6px"} position={"relative"}
                >

                    <Flex padding={"6px"} >
                        <Link className='navbarLink'
                            style={{ textDecoration: "none" }} >Home
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} position={"relative"} zIndex={1}>
                        <Link className='navbarLink'
                            style={{ textDecoration: "none" }} >About
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link className='navbarLink'
                            style={{ textDecoration: "none" }} >Home
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link className='navbarLink'
                            style={{ textDecoration: "none" }} >Home
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link className='navbarLink'
                            style={{ textDecoration: "none" }} >Home
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link className='navbarLink'
                            style={{ textDecoration: "none" }} >Home
                        </Link>

                    </Flex>


                </Flex>) :
                (
                    <></>
                )}



        </Flex>


    </div>
}
export default Navbar;