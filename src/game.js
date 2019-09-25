import {createStore} from 'redux';

const initial = {
    currentTurn: 'BLACK', // or 'RED'
    board: [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
};

function reducer(state, action) {
    if (action.type === "COL_CLICK"){
        
    }
    
}

export default createStore(reducer, initial)