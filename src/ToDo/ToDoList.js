import React from 'react';
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function ToDoList(props) {
    return (
        <ul style={styles.ul}>
            {props.toDo.map((item, index) => <ToDoItem 
                key={item.id}
                value={item}
                index={(index + 1)}
                handleChange={props.onToggle}></ToDoItem>)}
        </ul>
    )
}

ToDoList.propTypes = {
    toDo: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired

}

export default ToDoList;