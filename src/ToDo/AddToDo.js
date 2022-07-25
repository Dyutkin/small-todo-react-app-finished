import React, {useContext, useState}  from 'react';
import Context from '../context';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue); 
    return {
        input: {
            value,
            onChange: (e) => {setValue(e.target.value)},
        },
        clear: () => {setValue('')}
    }
}

function AddToDo() {
    const { addToDo } = useContext(Context);
    const inputDestructOptions = useInputValue('');

    const handleSubmit = (e) => {
        const {input: {value}, clear} = inputDestructOptions;
        e.preventDefault();
        if (value.trim()) {
            addToDo(value);
            clear('');
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={handleSubmit}>
            <input {...inputDestructOptions.input} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default AddToDo;