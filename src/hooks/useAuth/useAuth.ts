import { AppStateType } from "../../store/store"
import { useSelector } from "react-redux"

export const useAuth = () => {
  const { email, token, id } = useSelector((store: AppStateType) => store.auth)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
