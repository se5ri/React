import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const data = {
    title: `${id}번 게시물`,
    content: "게시판 이용 수칙입니다.",
  };

  return {
    title: data.title,
    description: data.content,
  };
}

/* export default function InfoPage() {
  return <h1>상세 조회 - 1번 게시물</h1>;
} */

export default async function InfoPage({ params }: { params: { id: string } }) {
  const { id } = await params; // Next.js 15 부터 params는 비동기 처리 필요
  await new Promise((resolve) => setTimeout(resolve, 1000 * 2));
  return <h1>상세 조회 - {id}번 게시물</h1>;
}
