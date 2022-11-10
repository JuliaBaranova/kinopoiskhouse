import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth/useAuth"
import { LOGIN } from "../costants/routes"

type Props ={
    children?: any;
}

export const PrivateRoute = ({ children}: Props) => {
  const {isAuth} = useAuth()
  if (!isAuth) {
    return <Navigate to={LOGIN} />
  }
  return children
}