import { useState } from "react";

function RealMadridSearch() {
  // 1. 입력받은 등번호를 저장할 State
  const [number, setNumber] = useState("");

  // 2. 선수 명단 데이터 (보통 서버에서 가져오지만, 여기선 예시로 작성)
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

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #FEBE10",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ color: "#0033A0" }}>⚽ Real Madrid 선수 조회</h2>

      <p>조회할 등번호를 입력하세요:</p>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="번호 입력 (예: 7, 9, 10)"
      />

      <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        <strong>결과: </strong>
        {/* 3. 논리적 판단: 번호가 명단에 있으면 이름을, 없으면 메시지를 출력 */}
        {players[number] ? (
          <span style={{ color: "green", fontWeight: "bold" }}>
            {players[number]}
          </span>
        ) : (
          <span style={{ color: "gray" }}>해당 번호의 선수가 없습니다.</span>
        )}
      </div>
    </div>
  );
}

export default RealMadridSearch;
