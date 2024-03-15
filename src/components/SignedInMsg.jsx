import UserContext from '../context/UserContext';
import {useContext} from 'react'

const SignedInMsg = () => {
    const { loggedInUser, signedIn } = useContext(UserContext)

        return (
            signedIn ?
            <>
            <div id="user-avatar-container"> 
            <img id="user-avatar" src={`${loggedInUser.avatar_url}`}/>
            </div>
            <p id='sign-in-msg'>{signedIn ? `Signed in as ${loggedInUser.username}` : null}</p>
            </>
            : null
        )

}

export default SignedInMsg