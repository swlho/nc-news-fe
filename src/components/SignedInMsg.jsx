import UserContext from '../context/UserContext';
import {useContext} from 'react'

const SignedInMsg = () => {
    const { loggedInUser, signedIn } = useContext(UserContext)

        return <p className='sign-in-msg'>{signedIn ? `Signed in as ${loggedInUser.username}` : null}</p>

}

export default SignedInMsg