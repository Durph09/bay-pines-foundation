import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import useAuthState from "./useAuthState";
import Button from "react-bootstrap/Button";
import "./EmployeePortalSignIn.css"
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const authUser = useAuthState();
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/EmployeePortalSignIn")
      })
      .catch((error) => console.log(error));
  };

  let displayName = '';
  if (authUser && authUser.email) {
    displayName = authUser.email.split('@')[0];
  }

  return (
    <div className="d-flex text-center justify-content-center align-content-center flex-column signout">
      {authUser ? (
        <>
          
          <Button variant="secondary" size="sm" onClick={userSignOut}>Sign Out {displayName}</Button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AuthDetails;
