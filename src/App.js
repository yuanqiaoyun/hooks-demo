// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.min.css'
import LunboSilder from './LunboSilder';
import { Button } from 'antd';
import Son from './Son';
const habbits ={
  "intresting":'puke',
  "eyeColor":'blue',
  "eyes":"double",
}
function App() {
  const [habbits1,setHabbits] = useState(habbits);
  const [sex,setSex] = useState("男");
  return (
    <div className="App">
      <Button onClick={()=>{ setHabbits({...habbits1,intresting:"run"}) }}>更改habbits</Button>
      <Button onClick={()=>{setSex("女")}}>更改性别</Button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LunboSilder/>
      <Son habbits={habbits1} sex={sex}></Son>
    </div>
  );
}

export default App;
