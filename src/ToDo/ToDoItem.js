import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem, 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem',
    }
}

function ToDoItem(props) {
    const {index, value, handleChange} = props;
    const classes = [];
    const { removeToDo } = useContext(Context);

    if(value.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" checked={value.completed} onChange={() => {handleChange(value.id)}} />
                &nbsp;
                <strong>{index}</strong>
                &nbsp;
                {value.title}
            </span>
            <button className="rm" onClick={() => {removeToDo(value.id)} }>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    value: PropTypes.object.isRequired,
    index: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
}

export default ToDoItem;