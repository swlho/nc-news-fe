import UserContext from '../context/UserContext';
import {useContext} from 'react'
import CommentDeleteButton from './CommentDeleteButton';

const CommentCard = (props) => {
    const {commentsArr} = props
    const { signedIn, loggedInUser, commentId } = useContext(UserContext)

    const commentCardsMap = commentsArr.map((comment)=>{
        const {comment_id, body, author, votes, created_at} = comment
        
        if(signedIn && author===loggedInUser.username){
            return (
                <div className="comment-card" key={comment_id}>
                    <p>{author} commented at {created_at}</p>
                    <p>{body}</p>
                    <CommentDeleteButton commentId={commentId}/>
                    <p><button>⬆️</button> {votes} <button>⬇️</button></p>
                </div>
            )
        } else {
            return (
                <div className="comment-card" key={comment_id}>
                    <p>{author} commented at {created_at}</p>
                    <p>{body}</p>
                    <p><button>⬆️</button> {votes} <button>⬇️</button></p>
                </div>
            )
        }

    })

    return (
        <div id="comments">
            {commentCardsMap}
        </div>
    )

}

export default CommentCard