import { Div, Flex } from "hase-ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writes",
};

// src/app/about/page.tsx
export default function WritingsPage() {
  return (
    <Div>
      <Flex paddingX="20px" marginY="20px">
        this is the writing content
      </Flex>
    </Div>
  );
}
