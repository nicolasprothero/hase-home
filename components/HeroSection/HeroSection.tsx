import { Flex, Text, Image, Heading } from "hase-ui";

export interface HeroSectionProps {
  bannerImage?: string;
  bannerCaption?: string;
  heading?: string;
  bannerWidth?: number; // natural px width of the image
  bannerHeight?: number; // natural px height of the image
}

export function HeroSection({
  bannerImage,
  bannerCaption,
  heading,
  bannerWidth = 16,
  bannerHeight = 9,
}: HeroSectionProps) {
  return (
    <Flex
      flexDir="column"
      gap="40px"
      align="center"
      paddingY="48px"
      width="90vw"
      maxWidth="800px"
    >
      <Flex
        flexDir="column"
        justify="start"
        gap="6px"
        width="100%"
        minWidth={0}
      >
        {bannerImage && (
          <Flex
            width="100%"
            style={{ aspectRatio: `${bannerWidth} / ${bannerHeight}` }}
          >
            <Image
              width="100%"
              height="100%"
              borderRadius="22px"
              src={bannerImage}
              alt={heading ?? "Banner image"}
              style={{ objectFit: "cover" }}
            />
          </Flex>
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
    </Flex>
  );
}
