 

 interface ITodoItemProps {
        id: string;
        label: string;
        complete: boolean;
        onComplete(id: string): void;
        onRemove(id: string): void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {
    return (
        <li key={id}>
            {label}
            {complete ? '(Completo)' : '(Incompleto)'}
            <button onClick={() => onComplete(id)}> 
              {complete ? 'Desmarcar' : 'Marcar'}
            </button>
            <button onClick={() => onRemove(id)}>Remover</button>
          </li>
    );
}