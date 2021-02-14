import React from 'react'

const Filter = ({ filter, handleFilter, clearFilter }) => {
    return (
        <div>
            Filter: <input
                value = {filter}
                onChange = {handleFilter}
            />
            <button onClick = {clearFilter}>clear</button>
        </div>
    )
}

export default Filter