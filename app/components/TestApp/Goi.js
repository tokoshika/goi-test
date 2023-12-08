"use client";
import { useState } from "react";
import { qus } from "./Module";

export default function Goi() {
  const [quest, setQuest] = useState(0);
  const [index, setIndex] = useState(0);
  const [count, setCout] = useState(0);
  const [len, setLen] = useState(qus.length);

  const click = (e) => {
    const a = qus[index].ans.indexOf(e.target.textContent);
    const b = qus[index].cor;

    console.log(len);
    console.log(a === b);
    if (a === b && 0 < len - 1) {
      setIndex(index + 1);
      setQuest(quest + 1);
      setCout(count + 1);
      setLen(len - 1);
      alert("おめでとう");
    } else if (a === b && len - 1 === 0) {
      setCout(count + 1);
      alert(`finish あたなの得点は${count + 1}です`);
    } else {
      console.log("錯了！");
      setCout(count - 1);
    }
  };

  return (
    <>
      <div className="goi-container">
        <div className="inner-container">
          <p>問題に正解すると1点、間違うと-1点です。</p>
          <div className="question">問題 : {qus[quest].q}</div>
          <div className="ans">
            <button onClick={click}>{qus[index].ans[0]}</button>
            <br />
            <button onClick={click}>{qus[index].ans[1]}</button>
            <br />
            <button onClick={click}>{qus[index].ans[2]}</button>
            <div>あなたの得点 【{count}】</div>
          </div>
        </div>
      </div>
    </>
  );
}
