import { isLowerCase, isUpperCase } from "./checker";
import Modal from "./Modal";
import { createPortal } from "react-dom";
import { useRef, useState } from "react"

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState<string>('');
  const textRef = useRef<HTMLTextAreaElement>(null);
  const REGEX = /^[a-z|A-Z]/;

  const upperCaseHandler = () => {
    if(textRef.current?.value === undefined) return
    else {
      if(!REGEX.test(textRef.current.value)) return setIsModalOpen(true);
      if(isUpperCase(textRef.current.value)) return setIsModalOpen(true);
    }

    fetch("http://localhost:8080/upper", {
      method: "POST",
      body: JSON.stringify(textRef.current.value),
      headers: {
        'Content-Type': "application/json",
      }
    })
      .then(res => res.json())
      .then(res => {
        setResponse(res);
      })
  }

  const lowerCaseHandler = () => {
    if(textRef.current?.value === undefined) return
    else {
      if(!REGEX.test(textRef.current.value)) return setIsModalOpen(true);
      if(isLowerCase(textRef.current.value)) return setIsModalOpen(true);
    }

    fetch("http://localhost:8080/lower", {
      method: "POST",
      body: JSON.stringify(textRef.current.value),
      headers: {
        'Content-Type': "application/json",
      }
    })
      .then(res => res.json())
      .then(res => {
        setResponse(res);
      })
  }

  return (
    <>
    {isModalOpen && createPortal(<Modal closefn={setIsModalOpen} />, document.getElementById("modal")!)}

      <div className="container">
        <div className="wrap">

          <div className="title">
            <h1 className="heading">문자열 변환기</h1>
            <img className="icon" src="icon.svg"/>
          </div>

          <section className="summary">
            <h2 className="semi-title">개요</h2>
            <p className="detail">Node.js로 구축된 서버에 문자를 적고 요청을 보낼 수 있는 컨버터입니다. 대문자로 요청했다면 소문자가 대문자로 바뀌어 응답이 돌아오며, 소문자로 요청했다면 대문자가 소문자로 바뀌어 응답이 돌아오게 됩니다.</p>
          </section>

          <section className="string-convertor">
            <div>
              <h3>요청하기</h3>
              <span>*영어만 입력해주세요.</span>
            </div>
            <textarea className="request-textarea" ref={textRef}/>
            <div className="button-wrap">
              <button className="button" onClick={upperCaseHandler}>대문자</button>
              <button className="button" onClick={lowerCaseHandler}>소문자</button>
            </div>
            <h3>응답받기</h3>
            <textarea className="response-textarea" disabled value={response}/>
          </section>

        </div>
      </div>
    </>
  )
}
