import UserContext from '../context/UserContext';
import {useState, useContext} from 'react'
import { postComment } from '../utils/api';

const CommentForm = (props) =>{
    const {article_id, setCommentsArr, setCommentCount} = props
    const { signedIn, loggedInUser } = useContext(UserContext)
    const [commentBoxText, setCommentBoxText] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        setCommentBoxText('')
        const date = new Date()
        setCommentsArr((currComments)=>{
            return [{body:commentBoxText, author: loggedInUser.username, votes: 0, created_at: `${date.toISOString()}`},...currComments]
        })
        setCommentCount((currCommentCount)=>{
            return currCommentCount + 1
        })
        postComment(`articles/${article_id}/comments`, commentBoxText, loggedInUser.username)
    }

return (
    signedIn ? 
    <form id="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="comment-box"><h4>Comment on this article:</h4></label>
        <textarea required multiline="true" rows="5" id='comment-box' type='text' value={commentBoxText} onChange={((event)=> {setCommentBoxText(event.target.value)})}/>
        <br/>
        <input type="submit" value ={`Post comment as ${loggedInUser.username}`}/>
    </form>
    : <h4>Sign in to post a comment</h4>
)    
}

export default CommentForm