import { useState, useMemo } from 'react';
import { log} from './utils';
export function MyComponent() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorialResult = useMemo(() => calculateFactorial(number) , [number]);
  // without useMemo
      // const factorialResult = calculateFactorial(number);
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);
  
  return (
    <div>
      Factorial of the following Number
      <input type="number" value={number} onChange={onChange} />
      is {factorialResult}
      <button onClick={onClick}>Increment</button> <span>{inc}</span>
    </div>
  );
}

function calculateFactorial(number) {
  log('calculateFactorial called!');
  return number <= 0 ? 1 : number * calculateFactorial(number - 1);
}