import { Div, Flex } from "hase-ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  return (
    <Div>
      <Flex paddingX="20px" marginY="20px">
        this is the photos content
      </Flex>
    </Div>
  );
}
