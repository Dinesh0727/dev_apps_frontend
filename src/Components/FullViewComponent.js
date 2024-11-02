import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ChakraProvider,
  extendTheme,
  Input
} from "@chakra-ui/react";
import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import Editor from "./Editor";

// Define the custom styles for the Modal
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

// const [value, setValue] = useState();

const baseStyle = definePartsStyle({
  overlay: {
    bg: "blackAlpha.200", // change the background
  },
  dialog: {
    borderRadius: "md",
    bg: "purple.100",
    maxHeight: "35rem"
  },
});

const modalTheme = defineMultiStyleConfig({
  baseStyle,
});

// Extend the Chakra UI theme with the custom modal theme
const theme = extendTheme({
  components: {
    Modal: modalTheme,
  },
});

export default function FullViewComponent({ isOpen, onClose, setValue, value }) {

  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxW={"75rem"} height={"35rem"}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Your content goes here */}
          <Editor setValue={setValue} toolBarVisibility={true} value={value}></Editor>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
