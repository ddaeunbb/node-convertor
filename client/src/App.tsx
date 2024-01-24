export default function App() {
  return (
    <div className="container">
      <div className="wrap">
        <h1 className="title">문자열 변환기</h1>

        <section className="summary">
          <h2 className="semi-title">개요</h2>
          <p className="detail">Node.js로 구축된 서버에 문자를 적고 요청을 보낼 수 있는 컨버터입니다. 대문자로 요청했다면 소문자가 대문자로 바뀌어 응답이 돌아오며, 소문자로 요청했다면 대문자가 소문자로 바뀌어 응답이 돌아오게 됩니다.</p>
        </section>

        <section className="string-convertor">
          <h3>요청하기</h3>
          <textarea className="request-textarea"/>
          <div className="button-wrap">
            <button className="button">대문자</button>
            <button className="button">소문자</button>
          </div>
          <h3>응답받기</h3>
          <textarea className="response-textarea"/>
        </section>
      </div>
    </div>
  )
}
