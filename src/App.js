import React, {useEffect, lazy, Suspense} from 'react'
import Context from './context';
import ToDoList from './ToDo/ToDoList';
import Loader from './Loader';
import Modal from './Modal/Modal';

// const AddToDo = lazy(() => {
//   return import('./ToDo/AddToDo')
// })
const AddToDo = lazy(() => { // проверяем lazyloading
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./ToDo/AddToDo'))
        }, 2000);
    })
})

function App() {
    const [toDo, setToDo] = React.useState([])
    const [isLoading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(response => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(response)
                    }, 1500);
                })
            })
            .then(todoes => {
                setToDo(todoes);
                setLoading(false);
            }).catch(error => {
                setLoading(false);
                console.error(error);
            })
    },
    []); 

    const toggleToDo = (id) => {
        setToDo(toDo.map(toDoItem => {
            if(toDoItem.id === id) {
                toDoItem.completed = !toDoItem.completed;
            }
            return toDoItem;
        }))
    }

    const removeToDo = (id) => {
        setToDo(toDo.filter(toDoItem => toDoItem.id !== id))
    }

    const addToDo = (title) => {
        setToDo([...toDo, {id: toDo.length + 1, completed: false, title}])
    }

    return (
        <Context.Provider value={{ removeToDo, addToDo }}>
            <div className="wrapper">
                <h1>List To Do</h1>
                <Modal />
                <Suspense fallback={<p>Loading...</p>}>
                    <AddToDo />
                </Suspense>
                {isLoading && <Loader />}
                {
                    (toDo.length || isLoading) ?
                        (<ToDoList toDo={toDo} onToggle={toggleToDo}></ToDoList>) :
                        (<p>Nothing to do</p>)
                }
        
            </div>
        </Context.Provider>
    );
}

export default App;
