import React , { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth } from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';  

export default function Dashboard() {
    const [error, setError] =  useState();
    const {currentUser ,logout} = useAuth();
    const {history} = useHistory();
   async function handleLogout(){
        setError('');
        try {
            await logout();
            history.push("/login");
        } catch  {
            setError('Failed to Log out');
        }

    }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile </h2>

          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <strong>Email : {currentUser.email}</strong>
          <strong> : {JSON.stringify(currentUser)}</strong>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
