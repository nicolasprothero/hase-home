import { HeroSection } from "@/components/HeroSection";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import WritingCard from "@/components/WritingCard/WritingCard";
import writings from "./writings.json";
import { Div, Flex, Text } from "hase-ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writes",
};

export default function WritingsPage() {
  const realWritings = writings.slice(0);

  return (
    <Flex flexDir="column" width="100%" paddingBottom="48px" align="center">
      <HeroSection
        bannerImage="https://pub-455caab020af4ed28e6c32aac9edff88.r2.dev/writings/writingsBanner.JPG"
        bannerCaption="My second(?) sketchbook back in university."
        heading="Random lists and things I decide to put down on paper!"
      />
      <Flex flexDir="column" gap="20px">
        {realWritings.map((writing, index) => (
          <WritingCard key={index} writing={writing} index={index} />
        ))}
      </Flex>
      <ScrollToTop />
    </Flex>
  );
}
