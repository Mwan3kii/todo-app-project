import styles from '@/styles/TodoItem.module.css';
import { useState, useRef } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosStore } from '@/store';
import { useAuthContext } from '@/context/AuthContext';

const TodoItem = ({ itemProp }) => {
    const handleChange = useTodosStore((state) => state.handleChange);
    const delTodo = useTodosStore((state) => state.delTodo);
    const setUpdate = useTodosStore((state) => state.setUpdate);
    const [editing, setEditing] = useState(false);
    const editInputRef = useRef(null);
    const { user } = useAuthContext();

    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

    const handleEditing = () => {
        setEditing(true);
    };

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };
    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setUpdate(editInputRef.current.value, itemProp.id);
            setEditing(false);
        }
    };
    return (
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input
                    type="checkbox"
                    checked={itemProp.completed}
                    onChange={() => handleChange(itemProp.id)}
                />
                {user && (
                    <button onClick={handleEditing}>
                        <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
                    </button>
                )}
                <button onClick={() => delTodo(itemProp.id)}>
                    <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
                </button>
                <span style={itemProp.completed ? completedStyle : null}>
                    {itemProp.title}
                </span>
            </div>
            <input
                type="text"
                ref={editInputRef}
                defaultValue={itemProp.title}
                className={styles.textInput}
                style={editMode}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
};

export default TodoItem;