import { Flex, Text, Image, Heading } from "hase-ui";

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

interface BookCardProps {
  book: Book;
  index: number;
}

export default function BookCard({ book, index }: BookCardProps) {
  return (
    <Flex key={`${book.title}-${index}`} justify="center" margin="0 auto">
      <Flex
        paddingY="28px"
        paddingX="32px"
        style={{ border: "2px #eee solid" }}
      >
        <Flex gap="20px" align="center">
          {book.image_URL && (
            <Flex height="300px" width="320px" style={{ overflow: "hidden" }}>
              <Image
                src={book.image_URL}
                alt={book.title}
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Flex>
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
  );
}
