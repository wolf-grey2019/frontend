import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {
  const history = useHistory();
  const [show, setShow] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCancel = () => history.push('/');

  const handleSignup = () => {
    if (username.length === 0 || email.length === 0 || password.length === 0) {
      return;
    }
    axios.post('http://localhost:3000/signup', { username, email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log(response.data.users);
        setShow(false);
      }).catch(reject => {
        console.log(reject);
      });
  }

  return (
    <div>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            UserName: 
            <input 
              type="text" 
              name={username} 
              onChange={e => setUsername(e.target.value)} 
            /> 
            <br />
          </p>
          <p>
            Email: 
            <input 
              type="email" 
              name={email} 
              onChange={e => setEmail(e.target.value)}
            /> 
            <br />
          </p>
          <p>
            Password: 
            <input 
              type="password" 
              password={password} 
              onChange={e => setPassword(e.target.value)}
            /> 
            <br />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSignup}>
            Sign Up
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <h1>{show ? 'Unsigned' : 'Signed'}</h1>
    </div>
  );
}

export default Signup;