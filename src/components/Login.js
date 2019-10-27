import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const [show, setShow] = useState(true);
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post(
      'http://localhost:3000/login',
      {
        username, password
      }
    ).then(response => {
      localStorage.setItem('token', response.data.token);
      console.log(response.data.users);
      setShow(false);
    }).catch(reject => {
      console.log(reject);
    });
  }

  const handleCancel = () => history.push('/');

  return (
    <div>
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            UserName:
            <input
              type="text"
              value={username}
              onChange={e => setName(e.target.value)}
            />
          </p>
          <p>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleLogin}>
            Log In
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <h1>{show ? 'Unlogged' : 'Logged'}</h1>
      {show &&
        <table>
        </table>}
    </div>
  );
}

export default Login;