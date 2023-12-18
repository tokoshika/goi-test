"use client";
import { useState } from "react";
import { qus } from "./Mojule";

export default function Goi() {
  const [quest, setQuest] = useState(0);
  const [index, setIndex] = useState(0);
  const [count, setCout] = useState(0);
  const [len, setLen] = useState(qus.length);
  const [visible, setVisible] = useState(false);

  //   ここはボタンの設定
  const toggle = () => {
    // 複製する時はクラスネームを変更すること
    const div = document.querySelector(".goi-container4");

    if (visible !== false) {
      div.classList.add("hide4");
      setVisible(false);
    } else {
      div.classList.remove("hide4");
      setVisible(true);
      scrollBy(0, 700);
    }
  };

  // 回答をクリックした時の処理
  const click = (e) => {
    const a = qus[index].ans.indexOf(e.target.textContent) + 1;
    const b = qus[index].cor;

    if (a === b && 0 < len - 1) {
      setIndex(index + 1);
      setQuest(quest + 1);
      setCout(count + 1);
      setLen(len - 1);
      alert("おめでとう");
    } else if (a === b && len - 1 === 0) {
      setCout(count + 1);
      alert(`finish あたなの得点は${count + 1}です`);

      // 複製する時はクラスネームをかえる
      document.querySelector(".question4").textContent = "お疲れさまでした！";
      // 複製する時はクラスネームをかえる
      const ansDiv = document.querySelector(".ans4");

      ansDiv.innerHTML = "";
    } else {
      alert("ざんねん");
      setCout(count - 1);
    }
  };

  return (
    <>
      {/* 複製する時はクラスネームを変更 */}
      <button className="toggle-btn4" onClick={toggle}>
        問題Lv.4
      </button>
      {/* 複製する時はクラスネームを変更 */}
      <div className="goi-container4 hide4">
        {/* inner-containerは各コンポーネント共通だからかえない */}
        {/* CSSは共通であてている */}
        <div className="inner-container">
          <p>問題に正解すると1点、間違うと-1点です。</p>
          {/* 複製する時はクラスネームを変更 */}
          <div className="question4">
            問題 {quest + 1} : {qus[quest].q}
          </div>
          <div className="ans4">
            <button onClick={click}>{qus[index].ans[0]}</button>
            <br />
            <button onClick={click}>{qus[index].ans[1]}</button>
            <br />
            <button onClick={click}>{qus[index].ans[2]}</button>
            <br />
            <button onClick={click}>{qus[index].ans[3]}</button>
            <br />
            <button onClick={click}>{qus[index].ans[4]}</button>
            <br />
          </div>
          <div className="point">あなたの得点 【{count}】</div>
        </div>
      </div>
    </>
  );
}
