"use client";

import { Flex } from "hase-ui";
import { ImageReveal } from "@/components/ImageReveal";

const IMAGE_URL =
  "https://pub-455caab020af4ed28e6c32aac9edff88.r2.dev/photos/san-sebastian/4.jpg";

export default function Home() {
  return (
    <Flex
      height="88vh"
      flexDir="column"
      align="center"
      justify="center"
      margin="0 auto"
    >
      <ImageReveal
        src={IMAGE_URL}
        alt="San Sebastián"
        height="70vh"
        onIntroDone={() => window.dispatchEvent(new Event("hase:intro-done"))}
      />
    </Flex>
  );
}
