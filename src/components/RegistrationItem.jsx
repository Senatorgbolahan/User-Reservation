import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

function RegistrationItem({item, handleDelete,editItem}) {
  const {id,name, email,password} = item
  return (
    <article className='grocery-all'>
    <div className='grocery-item'>
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
      <button type='button' className='edit-btn' onClick={() => editItem(id)}><FaEdit/></button>
      <button type='button' className='delete-btn' onClick={() => handleDelete(id)}><FaTrash/></button>
    </div>
    </article>
  )
}

export default RegistrationItem