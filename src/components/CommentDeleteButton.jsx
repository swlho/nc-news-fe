import { deleteComment } from '../utils/api';

const CommentDeleteButton = (props) =>{
    const {comment_id, setCommentsArr, setCommentCount} = props

    const handleOnClick = (event) => {
        setCommentsArr((currCommentsArr)=>{
            const newCommentsArr = currCommentsArr.filter((comment)=>{
                return +event.target.value!==comment.comment_id
            })
            return newCommentsArr
        })
        setCommentCount((currCount)=>{
            return currCount-1
        })
        deleteComment(`/comments/${event.target.value}`)
    }

    return <button onClick={handleOnClick} value={comment_id}>Delete comment</button>
}

export default CommentDeleteButton