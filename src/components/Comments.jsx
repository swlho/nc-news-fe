import {useState, useEffect, useContext} from 'react'
import ArticleContext from '../context/ArticleContext'
import { getDataByArticleId } from '../utils/api'
import CommentCard from './CommentCard'

const Comments =()=>{
    const {article_id, commentCount, commentsArr, setCommentsArr} = useContext(ArticleContext)
    const [isLoading, setIsLoading] = useState(true)
    
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
    <p>{commentCount} Comments:</p>
    <CommentCard commentsArr={commentsArr}/>
    </>
    )
}

export default Comments