"use client";

import { useRef, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Flex justify="center" margin="0 auto" width="100%">
      <Flex maxWidth="720px">
        <Flex
          flexDir="column"
          width="70vw"
          paddingX="24px"
          paddingY="24px"
          style={{ border: "2px #eee solid", overflow: "hidden" }}
        >
          <Flex flexDir="column" gap="20px">
            <div
              ref={scrollRef}
              style={{
                display: "flex",
                gap: "12px",
                height: "40vh",
                margin: "0 auto",
                overflowX: "auto",
                flexWrap: "nowrap",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                minWidth: 0,
                width: "100%",
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
            </div>

            <Flex flexDir="column" gap="10px">
              <Heading
                as="h2"
                fontWeight="600"
                lineHeight="24px"
                fontSize="16px"
              >
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
    </Flex>
  );
}
