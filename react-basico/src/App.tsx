import { useEffect, useState } from 'react'
import './App.css'
import { InputAdd } from './components/InputAdd';
import { List } from './components/List';
import { TodoItem } from './components/TodoItem';
import { TodoAPI, type ITodo } from './shared/services/api/TodoAPI';




export function App() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then(data => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    TodoAPI.create({ label: value, complete: false })
      .then(data => setList([...list, data]));
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