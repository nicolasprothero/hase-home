import { Text, Flex } from "hase-ui";
import type { Metadata } from "next";
import photos from "./photos.json";
import PhotoCard from "@/components/PhotoCard/PhotoCard";
import { Div } from "hase-ui";
import { HeroSection } from "@/components/HeroSection";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";

export const metadata: Metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  const realPhotos = photos.slice(1);

  return (
    <Flex
      flexDir="column"
      width="100%"
      paddingBottom="48px"
      align="center"
      margin="0 auto"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <Div marginBottom="40px">
        <HeroSection heading="photos taken both on film and on my iPhone" />
      </Div>
      <Flex
        flexDir="column"
        gap="40px"
        width="90vw"
        maxWidth="800px"
        minWidth={0}
      >
        {realPhotos.map((photo, index) => (
          <PhotoCard
            key={`${photo.caption}-${index}`}
            photo={photo}
            index={index}
          />
        ))}
      </Flex>
      <ScrollToTop />
    </Flex>
  );
}
