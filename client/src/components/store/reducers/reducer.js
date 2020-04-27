export const initialState = {
    todoData: [],
    // currentPhoto: {},
    // commentedPhotos: []
};


const reducer = (state, action) => {
    switch (action.type) {

        case 'FETCH_TODO':
            return {
                ...state,
                todoData: [...state.todoData,  ...action.payload]
            }

        case 'ADD_TODO':
            return {
                ...state,
                todoData: [...state.todoData, action.payload]
            }

        case 'DELETE_TODO':
            const filterData = state.todoData.filter( i => i._id !== action.payload )
            return {
                ...state,
                todoData: filterData
            }

        default:
            return state
    }
}

export default reducer
