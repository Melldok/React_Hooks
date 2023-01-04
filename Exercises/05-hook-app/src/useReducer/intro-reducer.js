

const initialState = [{
    id: 1,
    todo: 'Collect the soul stone',
    done: false
}];

// La accion le dice a nuestra funcion como queremos cambiar el estado

const todoReducer = ( state = initialState, action = {}) => {
    
    if ( action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    
    return state
}


let todos = todoReducer();


const newTodo = [{
    id: 2,
    todo: 'Collect the power stone',
    done: false
}];

const addTodoAction = {
    type : '[TODO] add todo',
    payload : newTodo,
}


todos = todoReducer( todos, addTodoAction)
console.log({state : todos})