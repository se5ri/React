import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import type { TodoItem } from "./TodoItem";

function Todo() {
  // 샘플 목록
  const initItemList: TodoItem[] = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  // 상태 관리
  // 상태가 수정되면 화면이 리렌더링 되는 리액트
  const [itemList, setItemList] = React.useState(initItemList);

  // 할일 추가
  function addItem(title: string) {
    console.log("할일 추가");
    // 데이터 갱신, itemList에 item 추가
    // num, title, done 속성을 가진 item 객체 생성
    const item: TodoItem = {
      num: itemList[itemList.length - 1]?.num + 1 || 1,
      title,
      done: false,
    };
    //객체의 불변성을 유지하기 위한 코드
    setItemList([...itemList, item]); // 비어있는 상태로 복사하고 새로운 애를 추가해주는 것

    // itemList.push(item);
    // setItemList([...itemList]); // 기존에 속성을 그대로 복사한 전개 문법 (기존의 itemList가 새로운 itemList로 바뀜)
  }

  // 완료/미완료 처리
  function toggleDone(num: number) {
    console.log(num, "완료/미완료");
    // 데이터 갱신, itemList에서 num에 해당하는 item의 done 값을 수정
    // 객체의 불변성을 위해서
    const newItemList = itemList.map((item) =>
      item.num === num ? { ...item, done: !item.done } : item
    );
    setItemList(newItemList);
  }

  // 할일 삭제
  function deleteItem(num: number) {
    console.log(num, "할일 삭제");
    // 데이터 갱신, itemList에서 num에 해당하는 item 삭제
    const newItemList = itemList.filter((item) => item.num !== num);
    setItemList(newItemList);
  }

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={addItem} />
            <TodoList
              itemList={itemList}
              toggleDone={toggleDone}
              deleteItem={deleteItem}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
