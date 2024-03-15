import UserContext from '../context/UserContext';
import {useContext} from 'react'

const UserAccountPage = () => {
    const { loggedInUser, signedIn } = useContext(UserContext)

    return (
    signedIn ?
        <div id="account-page">
        <div id="account-page-user-avatar-container">
        <img id="user-avatar" src={`${loggedInUser.avatar_url}`} />
        </div>
        <h2 id="signin-msg">Welcome {loggedInUser.username}</h2>
        <p>Your name: {loggedInUser.name}</p>
        </div>
    : 
    <h2>You are not signed in</h2>
    )
}

export default UserAccountPage