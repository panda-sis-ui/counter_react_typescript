import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState<number>(0);

  const but_click = (num:number) => {
    if (num == -1)
      setCount(count - 1)
    else if (num == 1){
      setCount(count+1)
    }
    else{
      setCount(0)
    }
  }

  return (
    
    <div id='conteiner'>
      <h1>Счётчик: {count}</h1>
      <div>
        <Button text="Уменьшить" onClick={() => but_click(-1)} />
        <Button text="Сбросить" onClick={() => but_click(0)} />
        <Button text="Увеличить" onClick={() => but_click(1)} />
      </div>
      
    </div>
  );
}

export default App;