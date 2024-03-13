import Comments from './Comments'
import ArticleVotes from './ArticleVotes'
import CommentForm from './CommentForm'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDataByArticleId } from '../utils/api'
import ArticleContext from '../context/ArticleContext'

const ArticlePage = () => {

    const { article_id } = useParams();
    const [article, setArticle]= useState({})
    const [articleVotes, setArticleVotes] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {title, topic, article_img_url, author, body, created_at} = article
    const [commentsArr, setCommentsArr]= useState([])
    const [commentCount, setCommentCount] = useState()
    const [commentId, setCommentId] = useState()

    useEffect(() => {
        setIsLoading(true)
        getDataByArticleId(`/articles/${article_id}`)
        .then(({article})=>{
          setIsLoading(false)
          setArticle(article)
          setArticleVotes(article.votes)
          setCommentCount(article.comment_count)
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
            <ArticleContext.Provider value={{article_id:article_id, articleVotes:articleVotes, setArticleVotes:setArticleVotes, setCommentsArr:setCommentsArr, setCommentCount:setCommentCount,commentCount:commentCount, commentsArr:commentsArr, commentId:commentId,setCommentId:setCommentId}}>
                <ArticleVotes />
                <CommentForm />
                <Comments />
            </ArticleContext.Provider>
        </div>
    )
}

export default ArticlePage