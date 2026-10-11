import { Flex, Div, Text, Image, Heading } from "hase-ui";

export default function Home() {
  return (
    <Flex
      height="88vh"
      flexDir="column"
      align="center"
      justify="center"
      margin="0 auto"
    >
      <Image
        height="70vh"
        borderRadius="22px"
        src="https://pub-455caab020af4ed28e6c32aac9edff88.r2.dev/photos/san-sebastian/4.jpg"
      />
    </Flex>
  );
}
