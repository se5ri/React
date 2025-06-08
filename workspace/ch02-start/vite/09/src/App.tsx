import Title from "./components/Title";
import TodoList from "./pages/todo/List";

export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

// Title, TodoList의 부모 컴포넌트
function App() {
  const list: TodoItem[] = [
    { _id: 1, title: "자바스크립트 공부", done: true },
    { _id: 2, title: "JS 프로젝트", done: true },
    { _id: 3, title: "React 공부", done: false },
  ];
  return (
    <div id="app">
      <div>
        <Title />
        <Title titleName="타이틀 1" />
        <Title titleName="타이틀 2" />
        <TodoList list={list} />
      </div>
    </div>
  );
}
export default App;
