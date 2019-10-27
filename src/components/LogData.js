import React from 'react';
import axios from 'axios';

const LogData = () => {
  axios.get('http://localhost:3000/login/getmydata', {
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
  }).then(response => {
    console.log(response.data.curUser);
  }).catch(reject => {
    console.log('token incorrect');
  })

  return (
    <div>
    </div>
  );
}

export default LogData;