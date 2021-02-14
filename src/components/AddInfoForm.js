import React from 'react'

const AddInfoForm = ({ addInfo, newName, newNumber, handleNameChange, handleNumberChange }) => {
    return (
        <div>
            <h2>Add new</h2>
            <form onSubmit = {addInfo}>
                <div>
                name: <input 
                    value = {newName}
                    onChange = {handleNameChange}
                />
                </div>
                <div>
                number: <input 
                    value = {newNumber}
                    onChange = {handleNumberChange}
                    />
                </div>
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default AddInfoForm