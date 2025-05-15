import React from "react";
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import "../styles/Login.css";
import apiClient from "../clients/apiClient";

export default function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const { login } = useAuth();

  const handleLogin = async (credentialResponse) => {
    try {
      const res = await apiClient.post(
        "http://localhost:8080/api/tokens",
        credentialResponse,
        { withCredentials: true } // Important for cookies
      );

      if (res.status === 200) {
        login();
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
            onSuccess={handleLogin}
            onError={() => {
              toast({
                title: "Login failed",
                description: "Google login was unsuccessful",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }}
          />
        </VStack>
      </Box>
    </Center>
  );
}
