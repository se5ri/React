"use server";
import { PostInfoRes } from "@/types/board";
import { revalidateTag } from "next/cache";

import { redirect } from "next/navigation";

// 서버 액션

// 게시글 등록
export async function createPost(prevState: PostInfoRes, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const body = { title, content, type: "qna" };
  console.log(body);
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: "POST",
    body: JSON.stringify({ title, content, type: "qna" }),
    headers: {
      "Content-Type": "application/json",
      "Client-Id": "openmarket",
    },
  });
  const data = await res.json();
  // 성공적으로 등록되었을 경우
  if (data.ok) {
    // '/posts' 페이지에 대한 캐시를 무효화 (최신 게시글 목록 반영을 위해)
    // revalidatePath("/posts");
    // revalidateTag("list");
    // '/posts' 페이지로 이동
    redirect("/posts");
  }
  return data;
}
