import {useEffect, useState} from 'react';
import { Exemplo2 } from '../Exemplo2';

export const Exemplo = ({props}) => {
  const [value, setValue] =useState('');

  const teste =[];
  useEffect(() =>
    {setValue(parseInt('1')+1);}, []);

  return (
    <div>
      {teste.map((i) => i)}
      <h1>Exemplos</h1>
      <ul>
        <li>{value.toString}</li>
        <li>Exemplo 2</li>
        <li>Exemplo 3</li>
        <li>Exemplo 4</li>
        <li>Exemplo 5</li>
      </ul>
      <Exemplo2 props={props} />
    </div>
  );
};