import { Button, Divider, Flex, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr"
import { FaWindowClose } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"


type NavbarProps = {
    bgColor: any;

};

const Navbar: React.FC<NavbarProps> = ({ bgColor }) => {

    const [showInPhone, setShowInPhone] = useState<Boolean>(false);

    const handleClick = () => {
        setShowInPhone(!showInPhone);
    }


    return <div style={{ position: "sticky", top: "0", zIndex: 1 }}>


        <Flex bg={bgColor}
            height="60px"
            color="white"

            align={"center"}
            justifyContent={{ md: "space-between" }}>

            <Flex width={"50%"}
                marginLeft={{ base: "5", md: "20", lg: "20" }}
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
                <Link href="#About" className='navbarLink'
                    style={{ textDecoration: "none" }}>Home
                </Link>
                <Link href="#AboutDetails" className='navbarLink'
                    style={{ textDecoration: "none" }} >About
                </Link>
                <Link href="#Projects" className='navbarLink'
                    style={{ textDecoration: "none" }}>Projects
                </Link>
                <Link target='_blank' href="/ResumeSharayu.pdf" className='navbarLink'
                    style={{ textDecoration: "none" }}>Resume
                </Link>
                <Link href='https://quaintrelle7.medium.com/' target="_blank"
                    className='navbarLink'
                    style={{ textDecoration: "none" }}>Blog
                </Link>
                <Link href="#Contact" className='navbarLink'
                    style={{ textDecoration: "none" }}>Contact
                </Link>
            </Flex>

            <Flex width="100px" display={{ md: "none" }} marginLeft="20" justifyContent={"center"}>
                {showInPhone ? (<IoMdClose style={{ color: "white", marginLeft: "50", fontSize: "30px", fontWeight: "800" }} onClick={handleClick}></IoMdClose>) : (<GiHamburgerMenu style={{ color: "white", marginLeft: "50", fontSize: "25px" }} onClick={handleClick}></GiHamburgerMenu>)}


            </Flex>
        </Flex>

        < Flex zIndex={1} display={{ md: "none" }}
            width={"100%"} position={"absolute"}
        >

            {showInPhone ? (

                <Flex direction={"column"} align={"center"} width={"100%"} bg="#c2f0e4" padding={"6px"} position={"relative"} fontWeight="700" 
                >

                    <Flex padding={"6px"} >
                        <Link href="#About" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Home
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} position={"relative"} zIndex={1}>
                        <Link href="#AboutDetails" className='navbarLink2'
                            style={{ textDecoration: "none" }} >About
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link href="#Projects" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Projects
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link href='https://quaintrelle7.medium.com/' target="_blank" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Blog
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link target='_blanck' href="/ResumeSharayu.pdf" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Resume
                        </Link>

                    </Flex>
                    <Divider orientation='horizontal' color={"#2db895"} border="0.5px solid" />
                    <Flex padding={"6px"} >
                        <Link href="#Contact" className='navbarLink2'
                            style={{ textDecoration: "none" }} >Contact
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