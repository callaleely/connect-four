export function drop(col) {
    return {
        type: 'COL_CLICK',
        clicked: col, 
    }
}