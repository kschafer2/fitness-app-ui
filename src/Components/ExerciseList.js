import { React, useState } from 'react'

import ExerciseListSearch from "../ExerciseListSearch.tsx"



function List(props) {

    //create a new array by filtering the original array

    const filteredData = ExerciseListSearch.filter((el) => {

        //if no input the return the original

        if (props.input === '') {

            return el;

        }

        //return the item which contains the user input

        else {

            return el.name.toLowerCase().includes(props.input)

        }

    })

    return (

        <ul>

            {filteredData.map((item) => (

                <li key={item.id}>{item.text}</li>

            ))}

        </ul>

    )

}



export default List