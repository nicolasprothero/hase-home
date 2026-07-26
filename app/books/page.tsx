import { Div, Flex, Text, Image, Heading } from "hase-ui";
import books from "./books.json";

interface Book {
  title: string;
  author: string;
  image_URL?: string;
  fiction?: boolean;
  page_count?: number;
  finished_on?: string;
  rating?: string;
  thoughts?: string;
}

export default function BooksPage() {
  const realBooks = (books as Book[]).slice(1);

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
      {(books as Book[]).slice(1).map((book, index) => (
        <Flex key={`${book.title}-${index}`} justify="center" margin="0 auto">
          <Flex
            paddingY="28px"
            paddingX="32px"
            style={{ border: "2px #eee solid" }}
          >
            <Flex gap="20px" justify="center">
              {book.image_URL && (
                <Div
                  height="300px"
                  width="320px"
                  style={{ overflow: "hidden" }}
                >
                  <Image
                    src={book.image_URL}
                    alt={book.title}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                </Div>
              )}
              <Flex flexDir="column" justify="center" gap="12px" width="300px">
                <Flex flexDir="column" gap="4px">
                  <Text fontSize="10px">
                    {book.fiction ? "FICTION" : "NON-FICTION"}
                  </Text>
                  <Heading
                    as="h2"
                    fontWeight="600"
                    lineHeight="24px"
                    fontSize="20px"
                  >
                    {book.title}
                  </Heading>
                  <Text fontSize="13px">{book.author}</Text>
                </Flex>

                <Flex flexDir="column">
                  <Flex flexDir="row" justify="space-between">
                    <Text fontSize="10px">PAGE COUNT:</Text>
                    <Text fontSize="10px">{book.page_count}</Text>
                  </Flex>
                  <Flex flexDir="row" justify="space-between">
                    <Text fontSize="10px">FINISHED ON:</Text>
                    <Text fontSize="10px">{book.finished_on}</Text>
                  </Flex>
                  <Flex flexDir="row" justify="space-between">
                    <Text fontSize="10px">RATING:</Text>
                    <Text fontSize="10px">{book.rating}</Text>
                  </Flex>
                </Flex>

                {book.thoughts && (
                  <Flex>
                    <Text fontSize="13px">{book.thoughts}</Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
