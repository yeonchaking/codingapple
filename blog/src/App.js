import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let subject = 'GreenTea';
  let month = [7,11,9];
  let day = [22,8,16];
  let [state,change] =useState(['제목이지렁','고고','하기시러']);
  let [thumb,thumbsup] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0);
  let [input,setInput] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{subject} 블로그</h4>
      </div>
    {
      state.map(function(a,i){
        return(
          <div className="list" key={i}>
          <h4>
            <button onClick={()=>{setTitle(i)}}>{a}</button>
            {" "}
            <span
              onClick={() => {
                let like = [...thumb];
                like[i]= thumb[i]+1;
                thumbsup(like);
              }}
            >
              👍{thumb[i]}
            </span>
          </h4>
          <p>
            {month[i]}월 {day[i]}일 발행
          </p>
        </div>
        )
      })
    }

     

      <button
        onClick={() => {
          let copy = [...state];
          copy[0] = "바꿔보자";
          change(copy);
          copy.sort();
        }}
      >
        change
      </button>
        <button onClick={()=>{ setModal(!modal)
          }}>modal</button>
       {modal == true ?  <Modal thumb = {thumb} title={state} index={title} month={month} day={day}></Modal> : null}
      <Component></Component>
      <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={()=>{
        let copy1 = [1,...month];
        let copy2 = [2,...day];
        let copy3 = [input,...state];
        change(copy3);
      }}>글 발행</button>

    </div>
  );

  function Modal(pa){
    return(
      <div>
        <div className='modal'>
          <h4>{pa.title[pa.index]}</h4>
          <p>{pa.month[pa.index]}월 {pa.day[pa.index]}일 발행</p>
          <p>{pa.thumb[pa.index]}개의 좋아요를 받았습니다</p>
         </div>

      </div>
    )
  }

  function Component(){
    return(
      <div>
        <div className='component'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
         </div>

      </div>
    )
  }
}

export default App;
