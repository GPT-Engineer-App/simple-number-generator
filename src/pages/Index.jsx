// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaBeer, FaCoffee, FaHiking, FaShoppingCart, FaUmbrellaBeach } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Welcome to Chakra Adventures!</Heading>
      <Text fontSize="lg" mb={6}>
        Explore the world with us. Choose your next adventure:
      </Text>
      <Flex justify="space-between" wrap="wrap">
        <Button leftIcon={<FaUmbrellaBeach />} colorScheme="teal" variant="solid" m={2}>
          Beach
        </Button>
        <Button leftIcon={<FaHiking />} colorScheme="green" variant="solid" m={2}>
          Hiking
        </Button>
        <Button leftIcon={<FaCoffee />} colorScheme="yellow" variant="solid" m={2}>
          Coffee Tours
        </Button>
        <Button leftIcon={<FaShoppingCart />} colorScheme="blue" variant="solid" m={2}>
          Shopping
        </Button>
        <Button leftIcon={<FaBeer />} colorScheme="orange" variant="solid" m={2}>
          Brewery Visits
        </Button>
      </Flex>
      <Image src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmF2ZWx8ZW58MHx8fHwxNzEzOTYyMDc1fDA&ixlib=rb-4.0.3&q=80&w=1080" mt={10} />
    </Box>
  );
};

export default Index;
