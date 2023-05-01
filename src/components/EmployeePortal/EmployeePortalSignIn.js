import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthDetails from './AuthDetails';
import { useNavigate } from 'react-router-dom';
import useAuthState from './useAuthState';

const EmployeePortalSignin = () => {
  // State variables for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      });
  };

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
          />
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
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>

      {/* Render the AuthDetails component */}
      <AuthDetails />
    </div>
  );
};

export default EmployeePortalSignin;
