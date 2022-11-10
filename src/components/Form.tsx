import { FC, useState } from "react"
interface FormProps {
  title: string,
  handleClick: (email: string, pass: string) => void
}

export const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-orange-700 p-6 mt-5 border border-gray-500 bg-gray-700 w-5-12 font-exo rounded-xl"
    >
      <input
        className="w-full mb-5 border border-gray-500 p-1 rounded-lg"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="   Email..."
      />
      <input
        className="w-full mb-5 border border-gray-500 p-1 rounded-lg "
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="   Password..."
      />
      <button
        className="w-full py-2 bg-orange-600 text-white rounded-xl text-lg"
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </button>
    </form>
  )
}
