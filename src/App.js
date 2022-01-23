import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Exemplo } from './components/Exemplo';

function App() {
  const [props, setProps] = useState('Teste propDrilling');
  
  return (
    <div>
      <p>teste</p>
      <button  onclick={() => setProps('Alterado')}>setProp</button>
      <Exemplo prop={props} />
    </div>
  );
}

export default App;