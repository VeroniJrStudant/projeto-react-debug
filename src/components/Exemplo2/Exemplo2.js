import { useState } from 'react';
import { Exemplo3 } from '../Exemplo3';

export const Exemplo2 = ({props}) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleChange = () => {
    setCount((p) => p + 1)
  };

  return (
    <>
      <h1>Exemplo2</h1>
      <p>{count}</p>
      <button onClick={handleChange}>Count</button>
      <p>{text}</p>
      <Exemplo3 setText={setText} props={props}/>
    </>
  );
};
