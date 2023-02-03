import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Icon,
  StackProps,
  Stack,
  Flex,
} from "@chakra-ui/react";
import CheckIcon from "../../Icons/Icons";

const Listitem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" {...rest} spacing={"24px"}>
      <Icon as={CheckIcon} w={"24px"} h={"24px"} />
      <Text>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <div>
      <Box
        width={"994px"}
        m={"auto"}
        mt={"-257px"}
        borderRadius={"12PX"}
        overflow={"hidden"}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="60px" w={['278',"378px"]} h={"336px"} textAlign="center">
            <Text fontSize={"24px"} fontWeight={800}>
              Premium Pro
            </Text>
            <Heading fontSize={"60px"} mt={"16px"}>
              $360
            </Heading>
            <Text color={"#121930"} fontSize={18} mt={"8px"}>
              billed just once
            </Text>
            <Button colorScheme={"purple"} mt={"24px"} w={242} size="lg">
              Get Started
            </Button>
          </Box>
          <Box padding={"48px"} bg={"white"} w={[ '316px','416px','616px']}>
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as={"ul"} spacing={"20px"} pt={"24px"}>
              <Listitem>International calling and messaging API</Listitem>
              <Listitem>Additional phone numbers</Listitem>
              <Listitem>Automated messages via Zapier</Listitem>
              <Listitem>24/7 support and consulting</Listitem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
