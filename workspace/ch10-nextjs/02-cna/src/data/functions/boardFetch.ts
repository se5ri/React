"use server"; // 서버 함수

import { Post } from "@/types/board";

export async function fetchPosts(): Promise<Post[]> {
  // 준비된 API 서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    headers: {
      "Client-Id": "openmarket",
    },
    next: {
      tags: ["list"],
      revalidate: 10, // 10초 후에 자동으로 revalidate
    },
    //cache: "no-cache", // next 15 기본 옵션
    cache: "force-cache", // next 14 기본 옵션
  });
  const data = await res.json();
  console.log("boardFetch", data.item.length);
  return data.item;
}
