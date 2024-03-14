import UserContext from '../context/UserContext';
import {useState, useContext} from 'react'
import { postComment } from '../utils/api';

const CommentForm = (props) =>{
    const { signedIn, loggedInUser } = useContext(UserContext)
    const {article_id, setCommentsArr, setCommentCount} = props
    const [commentBoxText, setCommentBoxText] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = (event) =>{
        event.preventDefault();
        setCommentBoxText('Posting... please wait')
        postComment(`articles/${article_id}/comments`, commentBoxText, loggedInUser.username)
        .then(({comment})=>{
            const {author, body, comment_id, created_at, votes} = comment
            setCommentBoxText('')
            setCommentCount((currCommentCount)=>{
                return currCommentCount + 1
            })
            setCommentsArr((currComments)=>{
                return [{comment_id:comment_id,body:body, author: author, votes: votes, created_at: created_at},...currComments]
            })
        })
        .catch((err)=>{
            setCommentBoxText('')
            setError({err})
        })
    }

if (error) {
    return <ErrorComponent/>
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