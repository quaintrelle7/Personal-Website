import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box, Input, Flex, Stack, Button, Center, Textarea, Text
} from '@chakra-ui/react'

type ContactFormProps = {

};

const ContactForm: React.FC<ContactFormProps> = () => {

    const [fullname, setFullname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method


    // const handleSubmit = e => {

    //     e.preventDefault();
    //     // let isValidForm = handleValidation();
    //     const data = {
    //         fullname,
    //         email,
    //         subject,
    //         message,
    //     };
    //     console.log(data);

    //     // const res = await fetch("/api/sendgrid", {
    //     //     body: JSON.stringify({
    //     //         email: email,
    //     //         fullname: fullname,
    //     //         subject: subject,
    //     //         message: message,
    //     //     }),
    //     //     headers: {
    //     //         "Content-Type": "application/json",
    //     //     },
    //     //     method: "POST",
    //     // });

    //     // setButtonText("Sending");
    //     // const res = await fetch("/api/sendgrid", {
    //     //     body: JSON.stringify({
    //     //         email: email,
    //     //         fullname: fullname,
    //     //         subject: subject,
    //     //         message: message,
    //     //     }),
    //     //     // headers: {
    //     //     //     "Content-Type": "application/json",
    //     //     // },
    //     //     // method: "POST",
    //     // });

    //     // const { error } = await res.json();
    //     // if (error) {
    //     //     console.log(error);
    //     //     setShowSuccessMessage(false);
    //     //     setShowFailureMessage(true);
    //     //     setButtonText("Send");
    //     //     return;
    //     // }
    //     // setShowSuccessMessage(true);
    //     // setShowFailureMessage(false);
    //     // setButtonText("Send");

    //     // console.log(fullname, email, subject, message);

    // }

    const handleSubmitTwo = async (e: React.FormEvent) => {
        e.preventDefault();

        // let isValidForm = handleValidation();

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                fullname: fullname,
                subject: subject,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        // const data = {
        //     fullname,
        //     email,
        //     subject,
        //     message,
        // };
        // console.log(data);

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        }

        console.log(fullname, email, subject, message);

    };
    return (
        <Box width={{ sm: "70vw", md: "50vw", lg: "30vw" }}>

            <Text align={"center"} fontSize={['20px', '20px', '30px', '40px']} color={"brand.100"} fontWeight={700} paddingBottom={5}>Get In Touch</Text>


            <form onSubmit={handleSubmitTwo}>
                <Stack>

                    <Flex>  <Stack flexGrow={1}>
                        <FormLabel htmlFor='fullname'> Name</FormLabel>
                        <Input type='text' value={fullname}
                            onChange={(e) => {
                                setFullname(e.target.value);
                            }}
                            name="fullname" />

                    </Stack>

                        <Stack marginLeft={5} flexGrow={1}>
                            <FormLabel htmlFor='email'>Email address</FormLabel>
                            <Input type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </Stack></Flex>



                    <FormLabel htmlFor='subject'>Subject</FormLabel>
                    <Input type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }} />

                    <FormLabel htmlFor='message'>Write your message</FormLabel>
                    <Textarea name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }} maxHeight={"250px"} />

                    <Button bg="teal" type='submit' >Send Message</Button>

                </Stack>

                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </form>
        </Box>
    )
}
export default ContactForm;