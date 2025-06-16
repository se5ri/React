import { useRef, useState } from "react";

function useCounter(initCount: number) {
  // TODO 커스텀 훅으로 수정
  const [count, setCount] = useState(0);
  const stepRef = useRef(initCount);

  const down = () => {
    setCount(count - stepRef.current);
  };
  const up = () => {
    setCount(count + stepRef.current);
  };
  const reset = () => {
    setCount(0);
  };

  return { count, stepRef, down, up, reset };
}
export default useCounter;
