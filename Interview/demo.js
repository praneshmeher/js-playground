// mport React from 'react';
// import './style.css';

// export default function App() {
// const [count, setCount] = React.useState(0);

//  const handleClick = () => {
// setCount(count + 1);
// setCount(count + 1);
// };

//  return (
// <>
// <p>Count: {count}</p>
// <button onClick={handleClick}>Click Me!!</button>
// </>
// );
// }

// display list in UI/console as comma seperated and last item seperated by "and" keyword.
// example -
// ['a', 'b', 'c', 'd'] -> a, b, c and d
// ['a', 'b'] -> a and b
// ['a'] -> a

let arr = ['a']
let ans = ''
//  arr.map((item, index)=>{
//     ans = ans+','
//  })

 console.log( arr.length > 1 ? (arr.slice(0,arr.length-1).join(','),'and',arr[arr.length-1]): arr[0])