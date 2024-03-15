import UserContext from '../context/UserContext';
import {useContext} from 'react'

const SignIn = () =>{
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
	<div className="sign-in-button-container">
		{signedIn ?
        <>
        <div id="user-avatar-container">
			<img id="user-avatar" src={`${loggedInUser.avatar_url}`} />
		</div>
		<p id='signin-msg'>{signedIn ? `Signed in as ${loggedInUser.username}` : null}</p>
        </>
        : null }
		<button id="signin-button" onClick={handleSignIn}>
			{signedIn ? "Sign out" : "Sign in"}
		</button>
	</div>
);
}

export default SignIn
