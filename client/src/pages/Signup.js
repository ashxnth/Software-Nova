import React, {useState} from 'react';
import '../App.css';
import { Card, Input, Spacer, Button } from '@zeit-ui/react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = (e) => {
    setUsername(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const signup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/signup', {
      username: username,
      password: password
    })
    .catch((error) => {
    console.log(error);
    });
  }

  return (
    <div className="Signup">
      <div className="add-card">
        <Card shadow>
          <h2>Sign Up</h2>
          <Spacer />
          <Input onChange={updateUsername} placeholder="Username" width="95%">
            Username
          </Input>
          <Spacer />
          <Input onChange={updatePassword} placeholder="Password" width="95%">
            Password
          </Input>
          <Spacer />
          <Button onClick={signup} shadow type="secondary">Sign Up</Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;