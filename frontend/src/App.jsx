import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Center>
      <Box
        bg="white"
        p={12}
        borderRadius="md"
        boxShadow="md"
        maxW="lg"
        textAlign="center"
      >
        <Image src="/logo512.png" alt="logo" mb={4} />
        <Heading as="h1" size="xl" mb={6}>
          Bin Management System
        </Heading>
        <Text fontSize="lg" mb={8}>
          Manage your waste efficiently with our bin management system.
        </Text>
        <Flex gap={4}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            onClick={() => {
              window.location.href = "/bins";
            }}
          >
            Get Started
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}

export default App;
