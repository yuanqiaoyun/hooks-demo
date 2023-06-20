import { useState } from "react";
import Brother1 from "./Brother1";
import Brother2 from "./Brother2";
const Father =()=>{
    const [txt,setText] = useState('数据')
    return <div>
        <h1>兄弟之间通信</h1>
        <Brother1 refreshBrother={()=>{setText('更新后的数据')}}/>
        <Brother2 txt={txt}/>
    </div>
}
export default Father;