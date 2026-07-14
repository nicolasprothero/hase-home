import { Flex, Div, Header, Button } from "hase-ui";

export default function Home() {
  return (
    <Div>
      <Header>NIC</Header>

      <Flex
        direction="row"
        justify="center"
        align="center"
        gap="12px"
        paddingX="20px"
        marginY="20px"
      >
        <Button>Click Me</Button>
      </Flex>
    </Div>
  );
}
