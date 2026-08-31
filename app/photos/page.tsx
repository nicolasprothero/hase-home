import { Div, Flex } from "hase-ui";
import type { Metadata } from "next";
import photos from "./photos.json";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

export const metadata: Metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  const realPhotos = photos.slice(0);

  return (
    <Flex flexDir="column" gap="40px" paddingY="48px">
      {realPhotos.map((photo, index) => (
        <PhotoCard
          key={`${photo.caption}-${index}`}
          photo={photo}
          index={index}
        />
      ))}
    </Flex>
  );
}
