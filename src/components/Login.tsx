import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Form } from "./Form"
import { setUser } from "../store/authStore/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { HOME } from "../costants/routes"

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(HOME)
      })
      .catch(() => alert("Invalid user!"))
  }

  return <Form title="Sign in" handleClick={handleLogin} />
}
