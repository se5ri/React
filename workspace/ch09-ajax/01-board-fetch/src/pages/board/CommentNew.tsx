import { useState } from "react";

function CommentNew() {
  const [content, setContent] = useState("");

  // API 서버에 댓글 등록 요청
  const requestAddCommet = async (formDate: FormData) => {
    try {
      // ForData를 Object로 변환
      const jsonBody = Object.fromEntries(formDate.entries());
      await fetch(
        "https://fesp-api.koyeb.app/market/posts/1/replies?delay=1000",
        {
          headers: {
            "Client-Id": "openmarket",
            "Content-Type": "application/json", // 요청 바디의 데이터 타입을 서버에 json이라고 알림
          },
          method: "POST",

          // 객체를 JSON 문자열로 변환
          body: JSON.stringify(jsonBody),
        }
      );
    } catch (err) {
      // alert("네트워크 문제로 인해 게시물 상세 조회에 실패했습니다.\n잠시 후 다시 시도해주세요");
      console.error(err);
    }
  };

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDate = new FormData(event.currentTarget);
    // formDate.append("content", content);
    requestAddCommet(formDate);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea
          value={content}
          name="content"
          onChange={(e) => setContent(e.target.value)}
          rows={3}
          cols={30}
          placeholder="댓글 내용"
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;
