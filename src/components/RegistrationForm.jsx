import React from 'react'

function RegistrationForm({isEditing, name,email,password,inputName,inputEmail,inputPassword,handleSubmit}) {
  return (
    <>
        <article>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="title">Name : </label>
                    <input 
                        type="text" 
                       value={name}
                        name= "title" 
                        onChange={inputName}
                        className='form-input'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="author">Email : </label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={inputEmail}
                        name= "author" 
                        className='form-input'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="author">Password : </label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={inputPassword}
                        name= "author" 
                        className='form-input'/>
                </div>
                <div className="form-control">
                    <button className='form-button'>{isEditing ? "Edit" : "ADD"}</button>
                </div>
            </form>
                {/* <BookList bookList={bookList}/> */}
        </article>
    </>
  )
}

export default RegistrationForm