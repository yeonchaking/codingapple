import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let title = 'GreenTea';
  let month = [7,11,9];
  let day = [22,8,16];
  let [state,change] =useState(['제목이지렁','으','하기시러']);
  let [thumb,thumbsup] = useState(0);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{title} 블로그</h4>
      
      </div>

      <div className='list'>
        <h4>{state[0]} <span onClick={()=>{thumbsup(thumb+1)}}>👍{thumb}</span></h4>
        <p>{month[0]}월 {day[0]}일 발행</p>
        </div>
        <div className='list'>
        <h4>{state[1]}<span onClick={()=>{thumbsup(thumb+1)}}>👍{thumb}</span></h4>
        <p>{month[1]}월 {day[1]}일 발행</p>
        </div>
        <div className='list'>
        <h4>{state[2]}<span onClick={()=>{thumbsup(thumb+1)}}>👍{thumb}</span></h4>
        <p>{month[2]}월 {day[2]}일 발행</p>
        </div>

    <button onClick={()=>{change(['제목이지렁','으','하기시러'])}}>change</button>
    </div>
  );
}

export default App;
