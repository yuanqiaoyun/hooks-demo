import { Button } from 'antd'
const Brother1 =(props)=>{
    return <div>
        <h1>我是兄弟1组件我想给兄弟2组件传递一个值</h1>
        <Button onClick={()=>{
            console.log('触发父组件更新数据的函数')
            props.refreshBrother();
        }}>点击修改兄弟组件的值</Button>
    </div>
}
export default Brother1