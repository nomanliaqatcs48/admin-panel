import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    const USER_SERVER = '/api/users';
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push('/login');
      } else {
        console.log('Log Out Failed');
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key='mail'>
          <a href='/login'>Signin</a>
        </Menu.Item>
        <Menu.Item key='app'>
          <a href='/register'>Signup</a>
        </Menu.Item>
      </Menu>
    );
  }
  return (
    <Menu mode={props.mode}>
      <Menu.Item key='logout'>
        <div onClick={logoutHandler}>Logout</div>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(RightMenu);
