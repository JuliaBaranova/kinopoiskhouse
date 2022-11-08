import {useSelector} from 'react-redux';
import { AppStateType} from "../../store/store"

export const useAuth=() => {
    const {email, token, id} = useSelector((store: AppStateType) => store.auth);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}