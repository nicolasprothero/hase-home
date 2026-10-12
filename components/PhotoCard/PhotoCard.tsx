"use client";

import { useRef, useEffect, useState } from "react";
import { Flex, Text, Image, Heading } from "hase-ui";

interface Photo {
  images: Array<string>;
  caption: string;
  photos_from?: string;
  photos_to?: string;
  thoughts?: string;
  shot_on?: string;
}

interface PhotoCardProps {
  photo: Photo;
  index: number;
}

const DRAG_THRESHOLD = 6;

export default function PhotoCard({ photo, index }: PhotoCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isTouchActive = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const movedDistance = useRef(0);
  const wasDragging = useRef(false);
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);
      if (absX > absY * 1.2) return;
      if (absY > 0) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isTouchActive.current = true;
    movedDistance.current = 0;
    wasDragging.current = false;
    startX.current = e.touches[0].clientX;
    startScrollLeft.current = el.scrollLeft;
    setIsTouching(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouchActive.current) return;
    const el = scrollRef.current;
    if (!el) return;

    const dx = e.touches[0].clientX - startX.current;
    movedDistance.current = Math.abs(dx);

    if (movedDistance.current > DRAG_THRESHOLD) {
      wasDragging.current = true;
      el.scrollLeft = startScrollLeft.current - dx;
    }
  };

  const handleTouchEnd = () => {
    isTouchActive.current = false;
    setIsTouching(false);
    setTimeout(() => {
      wasDragging.current = false;
    }, 0);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (wasDragging.current) {
      e.stopPropagation();
    }
  };

  return (
    <Flex
      width="100%"
      flexDir="column"
      style={{
        boxSizing: "border-box",
        border: "2px #eee solid",
        overflow: "hidden",
        minWidth: 0,
      }}
      paddingX="24px"
      paddingY="24px"
      maxWidth="720px"
    >
      <Flex
        flexDir="column"
        gap="20px"
        width="100%"
        style={{ minWidth: 0, overflow: "hidden" }}
      >
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClickCapture={handleClickCapture}
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
            userSelect: "none",
            touchAction: "pan-y",
          }}
        >
          {photo.images.map((image, imgIndex) => (
            <Image
              key={`${photo.caption}-${index}-${imgIndex}`}
              src={image}
              alt={photo.caption}
              height="100%"
              style={{ objectFit: "contain", flexShrink: 0 }}
              allowFullscreen
            />
          ))}
        </div>

        <Flex flexDir="column" gap="4px">
          <Heading as="h2" fontWeight="600" lineHeight="24px" fontSize="16px">
            <i>{photo.caption}</i>
          </Heading>

          <Flex flexDir="column" maxWidth="200px">
            <Flex flexDir="row" justify="space-between">
              <Text fontSize="10px">PHOTOS FROM:</Text>
              <Text fontSize="10px">{photo.photos_from}</Text>
            </Flex>
            {photo.photos_to && (
              <Flex flexDir="row" justify="space-between">
                <Text fontSize="10px">PHOTOS TO:</Text>
                <Text fontSize="10px">{photo.photos_to}</Text>
              </Flex>
            )}
            {photo.shot_on && (
              <Flex flexDir="row" justify="space-between">
                <Text fontSize="10px">SHOT ON:</Text>
                <Text fontSize="10px">{photo.shot_on}</Text>
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
  );
}
