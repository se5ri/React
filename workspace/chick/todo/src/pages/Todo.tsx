function Todo() {
  const title = "할 일 목록";
  return (
    <div id="main">
      <h2>{title}</h2>
      <div className="todoinput">
        <input type="text" autoFocus />
        <button type="button">추가</button>
      </div>
      <ul className="todolist">
        <li>
          <span>1</span>
          <span>
            <s>샘플1</s>
          </span>
          <button type="button">삭제</button>
        </li>
        <li>
          <span>2</span>
          <span>샘플2</span>
          <button type="button">삭제</button>
        </li>
        <li>
          <span>3</span>
          <span>샘플3</span>
          <button type="button">삭제</button>
        </li>
      </ul>
    </div>
  );
}
export default Todo;
