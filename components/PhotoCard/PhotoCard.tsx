import { Flex, Text, Image, Heading } from "hase-ui";

interface Photo {
  images: Array<string>;
  caption: string;
  photos_from?: string;
  photos_to?: string;
  thoughts?: string;
}

interface PhotoCardProps {
  photo: Photo;
  index: number;
}

export default function PhotoCard({ photo, index }: PhotoCardProps) {
  return (
    <Flex justify="center" margin="0 auto" width="100%">
      <Flex
        flexDir="column"
        paddingY="24px"
        paddingX="24px"
        width="70vw"
        style={{ border: "2px #eee solid", maxWidth: "100%" }}
      >
        <Flex flexDir="column" gap="20px">
          <Flex
            height="40vh"
            gap="12px"
            margin="0 auto"
            style={{
              overflowX: "auto",
              flexWrap: "nowrap",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {photo.images.map((image, imgIndex) => (
              <Image
                key={`${photo.caption}-${index}-${imgIndex}`}
                src={image}
                alt={photo.caption}
                height="100%"
                style={{ objectFit: "contain", flexShrink: 0 }}
              />
            ))}
          </Flex>

          <Flex flexDir="column" gap="12px" width="50%">
            <Heading as="h2" fontWeight="600" lineHeight="24px" fontSize="16px">
              <i>{photo.caption}</i>
            </Heading>

            <Flex flexDir="column">
              <Flex flexDir="row" gap="20px">
                <Text fontSize="10px">PHOTOS FROM:</Text>
                <Text fontSize="10px">{photo.photos_from}</Text>
              </Flex>
              {photo.photos_to && (
                <Flex flexDir="row" gap="20px">
                  <Text fontSize="10px">PHOTOS TO:</Text>
                  <Text fontSize="10px">{photo.photos_to}</Text>
                </Flex>
              )}
            </Flex>

            {photo.thoughts && (
              <Flex>
                <Text fontSize="13px">{photo.thoughts}</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
