import { Flex, Div, Text, Image } from "hase-ui";

export default function Home() {
  return (
    <Div>
      <Flex
        flexDir="column"
        align="center"
        margin="0 auto"
        gap="40px"
        paddingY="48px"
      >
        <Flex flexDir="column" justify="start" gap="6px">
          <Image
            width="420px"
            height="560px"
            borderRadius="22px"
            src="https://d2w9rnfcy7mm78.cloudfront.net/48230367/original_faa15551a53b5ecf0db63a656803dbb1.jpeg?1785038612?bc=0"
          ></Image>
          <Text
            color="color-mix(in oklab, #1d1d1d 90%, transparent)"
            fontSize="12px"
          >
            There are cathedrals everywhere for those with the eyes to see.
          </Text>
        </Flex>
      </Flex>
    </Div>
  );
}
