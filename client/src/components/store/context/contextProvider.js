import React, { useReducer } from 'react';
import Context from './context'

import axios from 'axios'

//reducer
import reducer, { initialState } from '../reducers/reducer'


export default function contextProvider(props) {
    
    const [ state, dispatch ] = useReducer(reducer, initialState)


    const fetchData = _ => {
        axios.get('http://localhost:5000/data')
            .then(res => res)
            .then(res => dispatch( { type: 'FETCH_TODO', payload: res.data } ) )
    }

    const addData = data => {
        axios.post('http://localhost:5000/add', data)
            .then(res => res )
            .then(res => dispatch( { type: 'ADD_TODO', payload: res.data } ) ) 
            // .then(res => console.log(res.data, ' sing;eeeeeeeeeeeeeeeee')) 
        }

    const removeData = id => {
        axios.delete(`http://localhost:5000/remove/${id}`)
            .then(res => res )
            .then(res => dispatch( { type: 'DELETE_TODO', payload: res.data._id } ) ) 
    }

    return (
        <Context.Provider value={{ state, dispatch, fetchData,  addData, removeData }}>
            { props.children }
        </Context.Provider>
    )
}

