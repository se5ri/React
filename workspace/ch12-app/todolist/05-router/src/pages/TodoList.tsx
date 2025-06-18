import type { TodoItem } from "@pages/TodoInfo";
import TodoListItem from "@pages/TodoListItem";

interface TodoList {
  items: TodoItem[];
}

const dummyData: TodoList = {
  items: [
    {
      _id: 1,
      title: "잠자기",
      done: true,
      createdAt: "2025.06.16 16:49:00",
      updatedAt: "2025.06.16 16:49:00",
    },
    {
      _id: 2,
      title: "자바스크립트 복습",
      done: false,
      createdAt: "2025.06.17 16:49:00",
      updatedAt: "2025.06.17 16:49:00",
    },
  ],
};

function TodoList() {
  const itemList = dummyData.items.map((item) => (
    <TodoListItem key={item._id} item={item} />
  ));
  return (
    <>
      <div id="main">
        <h2>할일 목록</h2>
        <div className="todo">
          <a href="/add">추가</a>
          <br />
          <form className="search">
            <input type="text" autoFocus />
            <button type="submit">검색</button>
          </form>
          <ul className="todolist">{itemList}</ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
