import { Flex, Text, Image, Heading } from "hase-ui";

interface Writing {
  imageUrl: string;
  title: string;
  tag?: string;
  date?: string;
  caption?: string;
}

interface WritingCardProps {
  writing: Writing;
  index: number;
}

export default function WritingCard({ writing, index }: WritingCardProps) {
  return (
    <Flex
      key={`${writing.title}-${index}`}
      paddingX="16px"
      paddingY="16px"
      width="90vw"
      maxHeight="360px"
      maxWidth="700px"
      style={{ border: "2px #eee solid", overflow: "hidden" }}
    >
      {writing.imageUrl && (
        <Flex
          style={{ position: "relative", overflow: "visible" }}
          width="100%"
        >
          <Image
            src={writing.imageUrl}
            alt={writing.title}
            width="100%"
            borderRadius="4px"
            style={{ objectFit: "cover" }}
          />
          <Flex
            flexDir="column"
            gap="6px"
            align="start"
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
            }}
          >
            <Flex
              bgColor="rgb(256 256 256 / 88%)"
              paddingY="2px"
              paddingX="10px"
              style={{
                borderRadius: "2px",
              }}
            >
              {writing.tag && (
                <Text fontSize="12px" style={{ textTransform: "uppercase" }}>
                  {writing.tag}
                </Text>
              )}
            </Flex>

            <Flex
              bgColor="rgb(256 256 256 / 92%)"
              paddingY="6px"
              paddingX="10px"
              flexDir="column"
              style={{
                borderRadius: "2px",
              }}
            >
              {writing.title && (
                <Text fontSize="12px" style={{ textTransform: "uppercase" }}>
                  {writing.title}
                </Text>
              )}
              {writing.date && <Text fontSize="12px">{writing.date}</Text>}
            </Flex>
          </Flex>
        </Flex>
      )}
      {/* <Flex flexDir="column" marginTop="auto">
        <Heading as="h2" fontWeight="600" lineHeight="24px" fontSize="20px">
          {writing.title}
        </Heading>
        {writing.caption && (
          <Flex>
            <Text fontSize="13px">{writing.caption}</Text>
          </Flex>
        )}
      </Flex> */}
    </Flex>
  );
}
