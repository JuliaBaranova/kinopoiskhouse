import { SignUp } from '../../components/SignUp'
import { Link } from 'react-router-dom'
import { LOGIN } from '../../costants/routes'

export const RegisterPage = () => {
    return (
        <div className="flex flex-col justify-center items-center fixed m-auto top-0 left-0 bottom-0 right-0">
            <h1>Register</h1>
            <p>
                Already have an account? <Link className="underline" to={LOGIN}>Sign in</Link>   
            </p>  
            <SignUp />
        </div>
    )
}
