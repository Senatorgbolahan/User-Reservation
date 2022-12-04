import React,{useState,useEffect} from 'react'

// pages
import RegistrationForm from './components/RegistrationForm';
import RegistrationItem from './components/RegistrationItem';
import RegistrationList from './components/RegistrationList';
import Alert from './components/Alert';


const getLocalStorage = () => {
    let list = localStorage.getItem("usersList") ;
    if (list) {
      return JSON.parse(localStorage.getItem("usersList"))
    } else {
      return []
    }
}

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usersList, setUsersList] = useState(getLocalStorage())
  const [alert, setAlert] = useState({show: true, msg: '', type: ''})
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  
  const inputName = (e) => {
    setName(e.target.value)
  }
  const inputEmail = (e) => {
    setEmail(e.target.value)
  }
  const inputPassword = (e) => {
    setPassword(e.target.value)
  }

  // handle user submit
  const handleSubmit =(e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === ''){
      showAlert(true,  'danger',"Please enter value!")
    } 
    else if (name && email && password && isEditing){
      const editMood = usersList.map((item) => {
        if (item.id === editID) {
          return { ...item, name: name,email:email,password:password}
        }
        return item;
      })
      setUsersList(editMood)
      setName("")
      setEmail("")
      setPassword("")
      setIsEditing(false)
      setEditID(null)
      showAlert(true, 'success','User Details Changed')
    }
    else{
      showAlert(true, 'success','User Added')
      const newUserInfo ={ id: new Date().getTime().toString(),name:name, email:email,password: password }
      setUsersList([...usersList, newUserInfo]);
      setName("")
      setEmail("")
      setPassword("")
    }
  }

  const showAlert = (show=false, type, msg) => {
      setAlert({show, type, msg})
  }

  // handle delete button on users
  const handleDelete =(id) => {
      const filtUser = usersList.filter((item) => (item.id !== id));
      setUsersList(filtUser)
      showAlert(true, 'danger','User Removed')
  }

  const editItem = (id) => {
      const specificItem = usersList.find((item) =>  item.id === id);
      setIsEditing(true)
      setEditID(id)
      setName(specificItem.name)
      setEmail(specificItem.email)
      setPassword(specificItem.password)
      
  }

  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList))
  }, [usersList])

  return (
    <div>
     <h2>Hello Users</h2>
     {alert.show && <Alert {...alert} removeAlert = {showAlert}/> }
     <RegistrationForm 
          isEditing={isEditing} 
          name={name} 
          email={email} 
          password={password}
          inputName= {inputName}
          inputEmail= {inputEmail}
          inputPassword = {inputPassword}
          handleSubmit={handleSubmit}
      />
     <RegistrationList 
          usersList={usersList}
          handleDelete={handleDelete}
          editItem={editItem}
      />
    </div>
  );
}

export default App;
