import { Text, Flex } from "hase-ui";
import type { Metadata } from "next";
import photos from "./photos.json";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

export const metadata: Metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  const realPhotos = photos.slice(1);

  return (
    <Flex flexDir="column" width="100%" paddingY="48px" align="center">
      <Flex width="100%" marginBottom="12px" style={{ maxWidth: "720px" }}>
        <Text>2026</Text>
      </Flex>
      <Flex flexDir="column" gap="40px">
        {realPhotos.map((photo, index) => (
          <PhotoCard
            key={`${photo.caption}-${index}`}
            photo={photo}
            index={index}
          />
        ))}
      </Flex>
    </Flex>
  );
}
