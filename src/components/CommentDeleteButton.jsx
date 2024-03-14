import { useState } from 'react';
import { deleteComment } from '../utils/api';

const CommentDeleteButton = (props) =>{
    const {comment_id, setCommentsArr, setCommentCount} = props
    const [deleteButtonText, setDeleteButtonText] = useState('Delete comment')

    const handleOnClick = (event) => {
        setDeleteButtonText('Deleting...')
        deleteComment(`/comments/${event.target.value}`)
        .then(()=>{
            setCommentsArr((currCommentsArr)=>{
                const newCommentsArr = currCommentsArr.filter((comment)=>{
                    return +event.target.value!==comment.comment_id
                })
                return newCommentsArr
            })
            setCommentCount((currCount)=>{
                return currCount-1
            })
        })
        .catch((err)=>{
            setDeleteButtonText('Delete comment')
        })
    }

    return <button onClick={handleOnClick} value={comment_id}>{deleteButtonText}</button>
}

export default CommentDeleteButton