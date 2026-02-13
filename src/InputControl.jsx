import { useState } from "react";

function InputControl() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleReset = () => {
    setInputValue("");
  };
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailRegex.test(e.target.value));
  };

  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}
    >
      <h3>🔠 대문자 출력 변환기</h3>

      {/* 입력창: 여기서는 소문자가 그대로 입력되고 보입니다. */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="소문자로 입력해보세요"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="이메일을 입력하세요"
      />
      {/* 출력: 렌더링할 때만 대문자로 변환하여 보여줍니다. */}
      <p>실제 저장된 값: {inputValue}</p>
      <p>
        <strong>대문자 출력:</strong> {inputValue.toUpperCase()} (
        {inputValue.length})
      </p>
      <button onClick={handleReset} style={{ marginLeft: "5px" }}>
        초기화
      </button>
      {!emailValid && email && <div>올바른 이메일 형식이 아닙니다.</div>}
    </div>
  );
}

export default InputControl;
