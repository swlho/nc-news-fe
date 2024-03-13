import ArticleContext from '../context/ArticleContext';
import {useContext} from 'react'
import { deleteComment } from '../utils/api';

const CommentDeleteButton = (props) =>{
    const {article_id, setCommentsArr, setCommentCount} = useContext(ArticleContext)
    const {commentId} = props

    const handleOnClick = (event) => {
        console.log(event.target.value,"<<<val")
        setCommentsArr((currCommentsArr)=>{
            const newCommentsArr = currCommentsArr.map((comment)=>{
                console.log(comment.comment_id,"id")
                if(+event.target.value===comment.comment_id){
                    console.log("match")
                    return null
                } else {
                    return comment
                }
            })
            return newCommentsArr
        })
        deleteComment(`/comments/${event.target.value}`)
    }

    return <button onClick={handleOnClick} value={commentId}>Delete comment</button>
}

export default CommentDeleteButton