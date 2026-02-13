import { useState } from "react";
import "./TodoList.css";

// 1. 개별 아이템 컴포넌트
function TodoItem({ todo, isDoneToggle, onDelete }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => isDoneToggle(todo.id)}
      />
      <span>{todo.task}</span>
      <button onClick={() => onDelete(todo.id)}>✖️</button>
    </li>
  );
}

// 2. 메인 투두 리스트 컴포넌트
function TodoList() {
  const [filter, setFilter] = useState("all");
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "첫번째할일", isDone: false },
    { id: 2, task: "두번째할일", isDone: true },
    { id: 3, task: "세번째할일", isDone: false },
  ]);

  // 추가 기능
  const addTodo = () => {
    if (!todoValue.trim()) return;
    const newTodo = { id: Date.now(), task: todoValue, isDone: false };
    setTodos([...todos, newTodo]);
    setTodoValue(""); // 입력창 비우기 (추가 후 삭제 기능)
  };

  // 삭제 기능
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 토글 기능
  const isDoneToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };
  // 모든 할 일을 비우는 함수
  const clearAll = () => {
    if (window.confirm("정말 모든 할 일을 삭제하시겠습니까?")) {
      setTodos([]);
    }
  };
  // 완료된 항목만 골라서 삭제하는 함수
  const deleteDone = () => {
    if (window.confirm("완료된 항목들을 모두 삭제하시겠습니까?")) {
      const activeTodos = todos.filter((todo) => !todo.isDone);
      setTodos(activeTodos);
    }
  };
  const leftCount = todos.filter((todo) => !todo.isDone).length;
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isDone;
    return true;
  });
  return (
    <div className="container">
      <h1>📝 투두리스트</h1>

      {/* [추가] 필터 버튼: 질문자님의 input-box 바로 위에 배치 */}
      <div
        className="filter-buttons"
        style={{ marginBottom: "10px", display: "flex", gap: "5px" }}
      >
        <button
          onClick={() => setFilter("all")}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          전체
        </button>
        <button
          onClick={() => setFilter("active")}
          style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
        >
          미완료
        </button>
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={todoValue}
          onChange={(e) => {
            console.log("현재 입력값:", e.target.value);
            setTodoValue(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>추가</button>
      </div>

      <ul className="todo-lis">
        {/* 2. 원본 todos 대신 필터링된 filteredTodos를 뿌려줍니다. */}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isDoneToggle={isDoneToggle}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      <div className="list-footer">
        <button className="delete-done-btn" onClick={deleteDone}>
          완료 삭제
        </button>
        <button className="clear-btn" onClick={clearAll}>
          전체 삭제
        </button>
      </div>
    </div>
  );
}

export default TodoList;
