import {useState, useEffect} from 'react'
import { getDataByArticleId } from '../utils/api'
import CommentCard from './CommentCard'

const Comments =(props)=>{
    const {article_id, comment_count} = props
    const [commentsArr, setCommentsArr]= useState([])
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
    <p>{comment_count} Comments:</p>
    <CommentCard commentsArr={commentsArr}/>
    </>
    )
}

export default Comments