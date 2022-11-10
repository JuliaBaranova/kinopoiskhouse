import { useNavigate } from "react-router-dom"
import backstep from "../assets/svg/backstep.svg"

export const BackStep = () => {
  const navigate = useNavigate()
  return (
    <button className="relative" onClick={() => navigate(-1)}>
      <img className="absolute w-14 h-14" src={backstep} alt="back" />
    </button>
  )
}
