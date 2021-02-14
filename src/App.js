import React, { useState } from 'react'
import './App.css'

import Persons from './components/Persons'
import AddInfoForm from './components/AddInfoForm'
import Filter from './components/Filter'

const App = () => {

  const [persons, setPersons] = useState([
    {
      name: 'Mary Maryland',
      number: '0105555555'
    },
    {
      name: 'Tony Tonyster',
      number: '0204444444'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPerson, setNewPerson] = useState({name: '', number: ''})
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
    setNewPerson({...newPerson, name: event.target.value})
    }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    setNewPerson({...newPerson, number: event.target.value})
  }
  
  const addInfo = (event) => {
    event.preventDefault()

    if (persons.some(obj => obj.name === newName)) {
      window.alert(`${newName} is already in the phonebook`)
    }
    else {
    setPersons(persons => [...persons, newPerson])
    }
    setNewName('')
    setNewNumber('')
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
    setShowAll(event.target.value === '')
  }

  const clearFilter = (event) => {
    setFilter('')
  }

  const namesToShow = showAll
    ? persons : persons.filter(person => person.name.toLowerCase().includes(filter))


  return (
    <div>
    <h1>Phonebook</h1>
    <AddInfoForm 
      newName = {newName}
      newNumber = {newNumber}
      handleNameChange = {handleNameChange}
      handleNumberChange = {handleNumberChange}
      addInfo = {addInfo}
    />
    <h2>Numbers</h2>
    <Filter 
      filter = {filter}
      handleFilter = {handleFilter}
      clearFilter = {clearFilter}
    />
    <Persons namesToShow = {namesToShow} />
  </div>
  );
}

export default App;
