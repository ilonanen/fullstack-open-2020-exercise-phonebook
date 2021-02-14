import React from 'react'

const Persons = ({ namesToShow }) => (
    <ul>
        {namesToShow.map(personinfo => 
            <li key = {personinfo.name}>
                {personinfo.name} {personinfo.number}
                </li>)}
    </ul>
)

export default Persons