import Comments from './Comments'
import ArticleVotes from './ArticleVotes'
import ErrorApiPage from './ErrorApiPage'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDataByArticleId } from '../utils/api'

const ArticlePage = () => {

    const { article_id } = useParams();
    const [article, setArticle]= useState({})
    const [articleVotes, setArticleVotes] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {title, topic, article_img_url, author, body, created_at} = article
    const [commentCount, setCommentCount] = useState()
    const [error,setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getDataByArticleId(`/articles/${article_id}`)
        .then(({article})=>{
          setIsLoading(false)
          setArticle(article)
          setArticleVotes(article.votes)
          setCommentCount(article.comment_count)
        })
        .catch((err)=>{
            setError({err})
        })
  }, [article_id])

  if(error){
    return <ErrorApiPage error={error}/>
}

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
            <ArticleVotes article_id={article_id} articleVotes={articleVotes} setArticleVotes={setArticleVotes}/>
            <Comments article_id={article_id} commentCount={commentCount} setCommentCount={setCommentCount}/>
        </div>
    )
}

export default ArticlePage