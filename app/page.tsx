import { Flex, Div, Text, Image } from "hase-ui";

export default function Home() {
  return (
    <Div height="90vh">
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
            src="https://pub-455caab020af4ed28e6c32aac9edff88.r2.dev/4C88EAC0-9D7F-40C0-8518-95DDFBED0D24.jpeg"
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
