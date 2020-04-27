import React, { useEffect, useContext, useState } from 'react'

import AppContext from '../../components/store/context/context'

export default function Home() {
    const [ data, setData ] = useState({
        name: '',
        age: ''
    })
    const { state, fetchData, addData, removeData } = useContext(AppContext)
    
   useEffect(() => {
    fetchData()
   }, [])

   const handleChange = e => {
       setData({
           ...data,
           [ e.target.name ]: e.target.value
       })
   }

   const handleSubmit = e => {
       e.preventDefault()
       const { name,age } = data
       const newData = { name, age }
       addData(newData)
       setData({
           name: '',
           age: ''
       })
    //    console.log(state, ' dataaa')
   }

   const { todoData } = state
   console.log(state, ' stateeee')

    return (
        <div>
            <ul>
                {
                    todoData.map(i => {
                        return(
                            <li key={ i._id }>
                                <h3>NAME - { i.name } , AGE - { i.age } </h3>
                                <button onClick={() => removeData(i._id)}>DELETE</button>
                                <button style={{ marginLeft: '10px' }}>EDIT</button>
                                <hr />
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <form onSubmit = { handleSubmit }>
                <input type="text" placeholder="NAME" value={ data.name } onChange={ handleChange } name="name" />
                <input type="number" placeholder="AGE" value={ data.age } onChange={ handleChange } name="age" />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
