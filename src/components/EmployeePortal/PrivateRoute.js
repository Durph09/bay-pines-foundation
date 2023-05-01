
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';


const useAuth = () => {
  const auth = getAuth();
  return auth.currentUser;
};

const PrivateRoute = ({children}) => {
  const user = useAuth();

  if (!user) {
    return <Navigate to="/employeeportalsignin" />;
  }

  return children;
};

export default PrivateRoute;
