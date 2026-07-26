import { Flex, Text, Image, Heading } from "hase-ui";
import books from "./books.json";
import BookCard from "@/components/BookCard/BookCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
};

export default function BooksPage() {
  const realBooks = books.slice(1);

  const totalBooks = realBooks.length;
  const totalPages = realBooks.reduce(
    (sum, book) => sum + (book.page_count ?? 0),
    0,
  );
  return (
    <Flex
      flexDir="column"
      align="center"
      margin="0 auto"
      gap="40px"
      paddingY="48px"
    >
      <Flex flexDir="column" justify="start" gap="6px">
        <Image
          width="800px"
          height="453px"
          borderRadius="22px"
          src="https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI0ODIzMDM2Ni9vcmlnaW5hbF82ZGM5ZjI3MWI5YjhiM2Q0MDgzYjg4YTI3ODdiYjg2MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNDAwLCJoZWlnaHQiOjI0MDAsImZpdCI6Imluc2lkZSIsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX0sIndlYnAiOnsicXVhbGl0eSI6NzV9LCJqcGVnIjp7InF1YWxpdHkiOjc1fSwicm90YXRlIjpudWxsfX0="
        ></Image>
        <Text
          color="color-mix(in oklab, #1d1d1d 90%, transparent)"
          fontSize="12px"
        >
          My bookshelf back home, taken before I moved to New York.
        </Text>
      </Flex>
      <Heading
        as="h1"
        lineHeight="22px"
        fontSize="20px"
        align="center"
        width="200px"
      >
        This is a list of every book that I have read in 2026.
      </Heading>
      <Flex
        style={{ border: "2px #eee solid" }}
        paddingX="24px"
        paddingY="12px"
        gap="48px"
      >
        <Flex flexDir="column" align="center">
          <Text lineHeight="20px" fontSize="16px">
            {totalBooks}
          </Text>
          <Text lineHeight="14px" fontSize="10px">
            BOOKS READ
          </Text>
        </Flex>
        <Flex flexDir="column" align="center">
          <Text lineHeight="20px" fontSize="16px">
            {totalPages}
          </Text>
          <Text lineHeight="14px" fontSize="10px">
            TOTAL PAGES
          </Text>
        </Flex>
      </Flex>
      {realBooks.map((book, index) => (
        <BookCard key={`${book.title}-${index}`} book={book} index={index} />
      ))}
    </Flex>
  );
}
