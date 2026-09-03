import { Flex, Text, Image, Heading } from "hase-ui";
import { HeroSection } from "@/components/HeroSection";
import books from "./books.json";
import BookCard from "@/components/BookCard/BookCard";
import type { Metadata } from "next";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";

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
      paddingY="48px"
      gap="40px"
    >
      <HeroSection
        bannerImage="https://pub-455caab020af4ed28e6c32aac9edff88.r2.dev/books2026/books2026banner.jpeg"
        bannerCaption="My bookshelf at home, taken before I moved to New York."
        heading="This is a list of every book that I have read in 2026."
      />
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
      <ScrollToTop />
    </Flex>
  );
}
