import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Heading,
  VStack,
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import "../styles/Login.css";

export default function Login({ setIsLogged }) {
  const navigate = useNavigate();
  const toast = useToast();

  const login = async (credentialResponse) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/tokens",
        credentialResponse
      );

      if (res.status === 200) {
        const responseBody = res.data;
        console.log("API Response after hitting http://localhost:8080/api/tokens " +  + responseBody);
        setIsLogged(true);
        localStorage.setItem("isLogged", "true");
        navigate("/"); // Redirect to homepage
      } else {
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Error occurred while logging in through Google",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const flag = localStorage.getItem("isLogged");
    if (flag === true) {
      navigate("/errorVault");
    }
  }, [navigate]);

  return (
    <Center h="100vh" bg="gray.100" className="login-container">
      <Box
        bg="white"
        p={8}
        rounded="xl"
        boxShadow="lg"
        textAlign="center"
        maxW="md"
        className="login-container-box"
      >
        <VStack spacing={4}>
          <Image
            src="https://via.placeholder.com/100" // Replace with actual image URL
            alt="Login Icon"
            boxSize="100px"
            mb={4}
            borderRadius="full"
          />
          <Heading color="teal.500">Welcome to the Sign In Page</Heading>
          <Text fontSize="md" color="gray.600">
            Sign in with Google to continue
          </Text>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              login(credentialResponse);
            }}
            onError={() => {
              toast({
                title: "Login failed",
                description: "Google login was unsuccessful",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            <Button colorScheme="blue" variant="solid">
              Google Login
            </Button>
          </GoogleLogin>
        </VStack>
      </Box>
    </Center>
  );
}
