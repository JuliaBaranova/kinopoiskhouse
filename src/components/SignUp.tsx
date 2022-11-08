import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../store/authStore/authSlice";
import { useNavigate } from "react-router-dom";
import { HOME } from "../costants/routes";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(HOME);
      })
      .catch(console.error);
  };

  return <Form title="Sign up" handleClick={handleRegister} />;
};
