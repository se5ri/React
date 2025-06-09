import { useState } from "react";

// 모듈 스코프 변수로 지정하면 컴포넌트가 리렌더링 되더라도 값은 유지되지만 모든 Message 컴포넌트가 공유하게 됨
// let count = 0;

function Message() {
  console.log("Message 렌더링");
  // input 요소를 다루는 가장 기본적인 방식
  // msg: 현재 입력값을 저장하는 상태변수
  // setMsg: msg 상태를 업데이트하는 함수
  // 초기값 설정
  const [msg, setMsg] = useState("");

  // 컴포넌트가 리렌더링되어도 이전 상태값이 유지된다.
  // 상태값이 바뀌면 화면이 리렌더링 된다.
  // count: 현재 입력 횟수
  // setCount: count 상태를 업데이트하는 함수
  const [count, setCount] = useState(0);

  // 지역변수이기 때문에 리렌더링되면 0으로 초기화 된다.
  //let count = 0;

  // input의 값이 변경될 때마다 호출되는 이벤트 핸들러
  // event: 입력 이벤트 객체 (TypeScript로 타입 지정)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputMsg = event.target.value; // 입력된 값을 가져옴
    if (inputMsg.length <= 3) {
      setMsg(inputMsg); // 상태 업데이트
      setCount(count + 1);
    }
  };
  /* 
제어 컴포넌트
- input 요소에 value, onChange를 추가
- 리액트의 state와 input 요소의 value 동기화
비제어 컴포넌트
- input 요소에 value, onChange를 추가하지 않음
- 리액트의 state와 input 요소의 value 동기화하지 않을 수 있음
*/

  return (
    <div>
      <input type="text" value={msg} onChange={handleChange} />
      <br />
      <span>입력 메세지:{msg} </span>
      <br />
      <span>입력 횟수: {count}</span>
    </div>
  );
}

export default Message;
