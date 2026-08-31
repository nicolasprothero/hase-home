import { Flex, Text, Image, Heading } from "hase-ui";

export interface HeroSectionProps {
  bannerImage?: string;
  bannerCaption?: string;
  heading?: string;
}

export function HeroSection({
  bannerImage,
  bannerCaption,
  heading,
}: HeroSectionProps) {
  return (
    <>
      <Flex flexDir="column" justify="start" gap="6px">
        {bannerImage && (
          <Image
            width="800px"
            height="453px"
            borderRadius="22px"
            src={bannerImage}
          />
        )}
        {bannerCaption && (
          <Text
            color="color-mix(in oklab, #1d1d1d 90%, transparent)"
            fontSize="12px"
          >
            {bannerCaption}
          </Text>
        )}
      </Flex>
      {heading && (
        <Heading
          as="h1"
          lineHeight="22px"
          fontSize="20px"
          align="center"
          width="200px"
        >
          {heading}
        </Heading>
      )}
    </>
  );
}
