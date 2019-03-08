import React, { useState } from 'react';
import Affichage from './components/Affichage';
import Formulaire from './components/Formulaire';
import './App.css';

const App = () => {
  const usersData = []

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
    user.id = users.length + 1
    //user.bouton = buton(prop);
		setUsers([ ...users, user ])
  }
  
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
/*
function buton(prop){
    return <button  onClick={
        confirmAlert({
            message: 'Confirmer la suppression',
            buttons: [
              {
                label: 'Oui',
                onClick: () => prop.deleteUser(user.id)
              },
              {
                label: 'Non',
                onClick: () => ''
              }
            ]
          })
    } 
    className="btn btn-danger">X
    </button>;
}*/
  
  
  return (
    <div className="container">
      <div className="App">
        <div className="row">    
          <div className="col-md-8">
            <Formulaire addUser={addUser}/>
          </div>
          <div className="col-md-4"></div>         
        </div>
        <div className="flex-large">         
            <Affichage users={users} deleteUser={deleteUser}/>
        </div>
      </div>
     </div>
  );
}

 

export default App;