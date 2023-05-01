import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import useAuthState from './useAuthState';

const EmployeePortalSignin = () => {
  // State variables for email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Hook for navigating programmatically
  const navigate = useNavigate();

  // Custom hook to get the authenticated user
  const user = useAuthState();

  // Redirect to the protected route if the user is already signed in
  useEffect(() => {
    if (user) {
      navigate('/protected');
    }
  }, [user, navigate]);

  // Function to handle form submission and sign-in
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/protected');
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/wrong-password') {
          setErrorMessage('Incorrect password. Please try again.');
        } else if (error.code ==="auth/user-not-found") {
          setErrorMessage("User not found. Please try again")
        }
      });
  };

  //Function to handle password reset request
    const requestNewPassowrd = () => {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("password reset email sent successfully");
        setErrorMessage("Password reset email sent. Please check your inbox.")
      })

      .catch((error) => {
        console.log (error);
        setErrorMessage("Failed to send passoword reset email.  Please try agian later.");
        
      })
    }

  // Render the sign-in form
  return (
    <div className='vw-100 vh-100 d-flex align-items-center justify-content-center'>
      <Form onSubmit={signIn}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <Form.Text className='text-danger'>{errorMessage}</Form.Text>}
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Button variant='link' onClick={requestNewPassowrd}>
          Forgot password?
        </Button>
      </Form>
      

     
    </div>
  );
};

export default EmployeePortalSignin;
