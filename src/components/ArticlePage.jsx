import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDataByArticleId } from '../utils/api'

const ArticlePage = () => {

    const { article_id } = useParams();
    const [article, setArticle]= useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {title, topic, article_img_url, author, body, created_at, votes, comment_count} = article

    useEffect(() => {
        setIsLoading(true)
        getDataByArticleId(`/articles/${article_id}`)
        .then((article)=>{
          setIsLoading(false)
          setArticle(article)
        })
  }, [article_id])

    return (
    isLoading? 
        <p>LOADING...</p>
     : 
        <div className='article-page'>
            <h3>{title}</h3>
            <p>Posted on {created_at}</p>
            <p>Written by {author}</p>
            <img src={`${article_img_url}`} className='article-img'></img>
            <p className='article-body'>{body}</p>
            <p>Tag: #{topic}</p>
            <p>Votes: {votes}</p>
            <p>Comments: {comment_count}</p>
            <h4>Comment on this article</h4>
        </div>
    )
}

export default ArticlePage