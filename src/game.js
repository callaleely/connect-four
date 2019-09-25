import {createStore} from 'redux';

const initial = {
    currentTurn: 'RED', // or 'BLACK'
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
    if (action.type === "COL_CLICK")
    console.log('dropping onto col' + action.clicked)
}

export default createStore(reducer, initial)