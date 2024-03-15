import UserContext from '../context/UserContext';
import {useContext} from 'react'
import CommentDeleteButton from './CommentDeleteButton';
import CommentCardVotes from './CommentCardVotes';
import { isoStringToDate } from '../utils/isoStringToDate';

const CommentCard = (props) => {
    const { signedIn, loggedInUser} = useContext(UserContext)

    const {commentsArr, setCommentsArr, setCommentCount} = props
    
    const commentCardsMap = commentsArr.map((comment)=>{
        const {comment_id, body, author, votes, created_at} = comment
                
        if(signedIn && author===loggedInUser.username){

            return (
                <div className="comment-card" key={comment_id}>
                    <p>{author} commented at {isoStringToDate(created_at)}</p>
                    <p>{body}</p>
                    <CommentDeleteButton comment_id={comment_id} setCommentsArr={setCommentsArr} setCommentCount={setCommentCount}/>
                    <CommentCardVotes votes={votes} comment_id={comment_id}/>
                </div>
            )
        } else {
            return (
                <div className="comment-card" key={comment_id}>
                    <p>{author} commented at {isoStringToDate(created_at)}</p>
                    <p>{body}</p>
                    <CommentCardVotes votes={votes} comment_id={comment_id}/>
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