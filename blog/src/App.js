import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let title = 'GreenTea';
  let month = [7,11,9];
  let day = [22,8,16];
  let [state,change] =useState(['제목이지렁','고고','하기시러']);
  let [thumb,thumbsup] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{title} 블로그</h4>
      </div>
    {
      state.map(function(a,i){
        return(
          <div className="list" key={i}>
          <h4>
            {a}{" "}
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
       {modal == true ?  <Modal></Modal> : null}
      <Component></Component>
    </div>
  );

  function Modal(){
    return(
      <div>
        <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
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
