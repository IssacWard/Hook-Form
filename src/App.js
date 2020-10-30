import './App.css';
import UserForm from './Components/UserForm'
import Results from './Components/Results'
import React, { useState } from 'react';

function App() {
  const [state,setState] = useState({
    firstname: "",
    lastname: "",
    email:"",
    password:"",
    confirmPassword:""
  });

  return (
    <div className="App">
      <UserForm inputs={state} setState={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;
