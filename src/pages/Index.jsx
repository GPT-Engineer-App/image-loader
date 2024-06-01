import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Our Website</Text>
        <Text>Explore our content and enjoy your stay!</Text>
        <Image src="https://cdnt3m-a.akamaihd.net/tem/warehouse/951/959/951959_001_lt.jpg" alt="Sample Image" />
      </VStack>
    </Container>
  );
};

export default Index;
