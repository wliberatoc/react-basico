import { useState } from 'react'
import './App.css'
import { InputAdd } from './components/InputAdd';
import { List } from './components/List';
import { TodoItem } from './components/TodoItem';

export function App() {
  const [list, setList] = useState([
    { id: '1', label: 'Item 1', complete: false },
    { id: '2', label: 'Item 2', complete: false },
    { id: '3', label: 'Item 3', complete: false },
    { id: '4', label: 'Item 4', complete: false },
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: (list.length + 1).toString(), label: value, complete: false }
    ]);
  }


  const handleComplete = (id: string) => {
    setList(list.map(i => i.id === id ? { ...i, complete: !i.complete } : i));
  }
  
  const handleRemove = (id: string) => {
    setList(list.filter(i => i.id !== id));
  }

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <h1>Lista de Itens</h1>
      <List>
        {list.map(item => (
          <TodoItem 
          key={item.id}
           id={item.id} label={item.label} 
           complete={item.complete} 
           onComplete={handleComplete} 
           onRemove={handleRemove}
           />
        ))}
      </List>
    </div>
  );
}