// TODO 1. 메세지를 입력하면 입력 메세지에 반영되도록 수정

import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setMessage(event.target.value);
  // };
  // 서버의 시간을 ahax로 요청
  const time = 125;
  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <br />
        <span>입력 메세지: {message}</span>
      </div>
    </>
  );
}

export default App;
