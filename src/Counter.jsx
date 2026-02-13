import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  // 좋아요 상태 추가 (false: 🤍, true: ❤️)
  const [isLiked, setIsLiked] = useState(false);

  const MAX_VALUE = 10;
  const MIN_VALUE = -10;

  const addCount = () => {
    if (count < MAX_VALUE) setCount((prev) => prev + 1);
  };

  const subCount = () => {
    if (count > MIN_VALUE) setCount((prev) => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
    setIsLiked(false); // 리셋 시 좋아요도 취소
  };

  // 좋아요 버튼 클릭 함수
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const getCountColor = () => {
    if (count > 0) return "red";
    if (count < 0) return "blue";
    return "black";
  };

  return (
    <div className="counter">
      {/* 좋아요 버튼 (LikeButton 컴포넌트 역할) */}
      <div className="like-section">
        <button
          onClick={toggleLike}
          style={{
            fontSize: "2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
      </div>

      <h1 className="count" style={{ color: getCountColor() }}>
        {count}
      </h1>

      <div className="buttons">
        <button onClick={subCount} disabled={count === MIN_VALUE}>
          -
        </button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={addCount} disabled={count === MAX_VALUE}>
          +
        </button>
      </div>

      {count === MAX_VALUE && <p style={{ color: "orange" }}>최대 값 도달!</p>}
      {count === MIN_VALUE && <p style={{ color: "orange" }}>최소 값 도달!</p>}
    </div>
  );
}

export default Counter;
