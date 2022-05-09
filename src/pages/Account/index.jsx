import React from 'react'
import useAuth from '../../hooks/useAuth'
import {useHistory} from 'react-router-dom'

export default function Account() {
  let history = useHistory();
  let {login,logout} = useAuth();

  return login ? (
    <p className="container auth flex align-items-center">
      <h3 className="auth-title">Welcome</h3>
      <button className="btn"
        onClick={() => {
          logout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p className="container auth">You are not logged in.</p>
  );
}
