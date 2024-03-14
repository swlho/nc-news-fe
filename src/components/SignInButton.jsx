import UserContext from '../context/UserContext';
import SignedInMsg from './SignedInMsg';
import {useContext} from 'react'

const SignInButton = () =>{
    const { loggedInUser, setLoggedInUser, signedIn,setSignedIn } = useContext(UserContext)

    const handleSignIn = () => {
        if (signedIn === false) {
            setLoggedInUser(loggedInUser)
			setSignedIn(!signedIn)
		} else {
			setSignedIn(!signedIn)
            setLoggedInUser(loggedInUser)
		}
        console.log(loggedInUser)
	}

return (
    <div className="sign-in-button">
<button onClick={handleSignIn}>{signedIn ? "Sign out":"Sign in"}</button>
<SignedInMsg signedIn={signedIn}/>
    </div>
)
}

export default SignInButton