- 兄弟组件之间的通信方式，有两种
- 1. 有着同一个父组件 Brother1 Brother2 有着同一个父组件 Father组件.
>思路：A组件和B组件共有一个父组件C，A组件改变值，想要B组件拿到，B组件直接拿props来渲染，父组件传给A组件一个改变数据的函数，来改变自己的state
----------------------------
**高阶函数：**:入参是一个函数，返回的结果也可能是一个复杂的函数，例如原来用到的setTimeOut,Array.map()都是高阶函数。下面手写一个高阶函数
````
function add(x,y){
 retrun x+y;
}
function superFunc(x,y.f){
    return f(x,y)
}
superFunc(5,3,add);
````
