 import TodoItemStyles from './TodoItem.module.css';


 interface ITodoItemProps {
        id: string;
        label: string;
        complete: boolean;
        onComplete(id: string): void;
        onRemove(id: string): void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {
    return (
        <li key={id} className={TodoItemStyles.Item}>
          <span className={TodoItemStyles.Text}>
            {label}
          </span>

          <div className={TodoItemStyles.ButtonsGroup}>
            <button className={TodoItemStyles.ButtonComplete} onClick={() => onComplete(id)}> 
              {complete ? 'Desmarcar' : 'Marcar'}
            </button>
            <button className={TodoItemStyles.ButtonRemove} onClick={() => onRemove(id)}>Remover</button>
          </div>
          </li>
    );
}