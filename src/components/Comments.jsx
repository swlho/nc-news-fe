import {useState, useEffect} from 'react'
import { getDataByArticleId } from '../utils/api'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

const Comments =(props)=>{
    const {article_id, commentCount, setCommentCount} = props
    const [isLoading, setIsLoading] = useState(true)
    const [commentsArr, setCommentsArr]= useState([])
    
    useEffect(() => {
        setIsLoading(true)
        getDataByArticleId(`/articles/${article_id}/comments`)
        .then(({comments})=>{
          setIsLoading(false)
          setCommentsArr(comments)
        })
  }, [])

    return (
      isLoading? 
      <p>LOADING...</p>
      : 
    <>
    <CommentForm article_id={article_id} setCommentsArr = {setCommentsArr} setCommentCount={setCommentCount}/>
    <p>{commentCount} Comments:</p>
    <CommentCard commentsArr = {commentsArr} setCommentsArr={setCommentsArr} setCommentCount={setCommentCount}/>
    </>
    )
}

export default Comments