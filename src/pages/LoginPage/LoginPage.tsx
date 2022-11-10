import { Link } from "react-router-dom"
import { Login } from "../../components/Login"
import { REGISTER } from "../../costants/routes"

export const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed m-auto top-0 left-0 bottom-0 right-0">
      <h1>Login</h1>
      <p>
        Or <Link className="underline" to={REGISTER}>register</Link>
      </p>
      <Login />
      </div>
  )
}
