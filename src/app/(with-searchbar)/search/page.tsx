import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`
  );
  console.log("url : ", process.env.NEXT_PUBLIC_API_SERVER_URL);
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  console.log("여기!!!!", response.ok);
  const books: BookData[] = await response.json();
  console.log(`books : ${books}`);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
