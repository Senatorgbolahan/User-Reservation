import React from 'react'
// import {Faedit, FaTrash} from 'react-icons/fa'

// page
import RegistrationItem from './RegistrationItem'

function RegistrationList({usersList,handleDelete, editItem}) {
  return (
    <article>
      {usersList.map((item) => {
        return <RegistrationItem key={item.id} item={item} handleDelete={handleDelete} editItem={editItem}/>
      })}
    </article>
  )
}

export default RegistrationList