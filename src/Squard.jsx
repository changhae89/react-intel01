import { useState } from "react";

// 1. 자식 컴포넌트: 부모가 준 선물(props)을 받아 출력만 함
function PlayerCard({ name, number }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#f3f3f3",
        borderRadius: "8px",
      }}
    >
      <h4>선수 정보 카드</h4>
      <p>
        이름: <strong>{name}</strong>
      </p>
      <p>등번호: {number}번</p>
    </div>
  );
}

// 2. 부모 컴포넌트: 상태를 관리하고 자식에게 넘겨줌
function RealMadrid() {
  const [inputNumber, setInputNumber] = useState("");

  const players = {
    1: "티보 쿠르투아 (GK)",
    2: "다니 카르바할 (RB)",
    3: "에드거 밀리탕 (CB)",
    4: "하위선 (CB)",
    5: "주드 벨링엄 (MF)",
    6: "카마빙가 (MF)",
    7: "비니시우스 주니어(FW)",
    8: "페데리코 발베르데(MF)",
    10: "킬리안 음바페 (FW)",
    11: "호드리구 (FW)",
  };

  return (
    <div>
      <h2>⚽ 레알 마드리드 공식 앱</h2>
      <input
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="번호 입력"
      />

      {players[inputNumber] && (
        <PlayerCard name={players[inputNumber]} number={inputNumber} />
      )}
    </div>
  );
}

export default RealMadrid;
