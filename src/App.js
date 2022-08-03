// import React, { useState, useMemo } from "react";
// import { log, getInitialItems } from './utils';
// // without memo
// /*   function List({ items }) {
//     log('renderList');
//     return items.map((item, key) => (
//       <div key={key}>item: {item.text}</div>
//     ));
//   }

//   export default function App() {
//     log('renderApp');  
//     const [count, setCount] = useState(0);
//     const [items, setItems] = useState(getInitialItems(10)); 
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>
//           inc
//         </button>
//         <List items={items} />
//       </div>
//     );
//   } */

// // with memo
// const List = React.memo(({ items }) => {
//   log('renderList');
//   return items.map((item, key) => (
//     <div key={key}>item: {item.text}</div>
//   ));
// });

// export default function App() {
//   log('renderApp');  
//   const [count, setCount] = useState(0);
//   const [items, setItems] = useState(getInitialItems(10));  
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         inc
//       </button>
//       <List items={items} />
//     </div>
//   );
// }

// /* 
// In the above example, memoization works properly and reduces the number of renders. During mount renderApp and renderList are logged, but when inc is clicked, only renderApp is logged.
//  */

// useMemo
import React, { useState, useMemo } from "react";
import { log, getInitialItems } from './utils';
import{ MyComponent}from './useMemoRender'
// without memo
/*   function List({ items }) {
    log('renderList');
    return items.map((item, key) => (
      <div key={key}>item: {item.text}</div>
    ));
  }

  export default function App() {
    log('renderApp');  
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(getInitialItems(10)); 
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          inc
        </button>
        <List items={items} />
      </div>
    );
  } */

// with memo
const List = React.memo(({ items }) => {
  log('renderList');
  return items.map((item, key) => (
    <div key={key}>item: {item.text}</div>
  ));
});

export default function App() {
  log('renderApp');  
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(getInitialItems(10));  
  return (
    <MyComponent/>
  );
}

/* 
In the above example, memoization works properly and reduces the number of renders. During mount renderApp and renderList are logged, but when inc is clicked, only renderApp is logged.
 */