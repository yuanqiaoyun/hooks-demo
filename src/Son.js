import React,{ useState,useEffect } from 'react';
import { Input } from 'antd';
const Son = (props)=>{
  const { habbits } = props;
  const [name,setName] = useState("张三");
  const [intresting,setIntresting] = useState(habbits.intresting);
  // const [sex,setSex]= useState(props.sex);
  console.log("props1111",habbits)
    console.log(props);
    useEffect(() => {
        setIntresting(props.habbits.intresting);
      }, [habbits.intresting])
    return <div>
        <p>state的姓名：{name}</p>
         新的名字:<Input value={name} onChange={(e)=>{ setName(e.target.value)}}></Input>
         <p>来自父组件的intresting:<span style={{ color:'red'}}>{intresting}</span></p>
         {/* <p>来自父组件的性别:<span style={{ color:'red'}}>{sex}</span></p> */}
    </div>
}
export default Son;